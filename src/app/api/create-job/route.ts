// src/app/api/create-job/route.ts
import { NextRequest } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

import { FieldValue } from "firebase-admin/firestore";
import { buildCreateJobContent } from "@/lib/apiSecurity";

type JobPayload = {
    jobUid?: string;
    service?: string;
    pickup?: string;
    dropoff?: string;
    vehicle?: string; // keep as a single string for now
    customer_name?: string;
    customer_phone?: string;
    // Optional extras you may pass now or later
    year?: string;
    make?: string;
    model?: string;
    color?: string;
    amountQuoted?: number; // dollars
};

export async function POST(req: NextRequest) {
    console.log("[create-job] ENV PROJECT ID:", process.env.FIREBASE_PROJECT_ID);
    console.log("[create-job] ENV CLIENT EMAIL:", process.env.FIREBASE_CLIENT_EMAIL);
    console.log(
        "[create-job] ENV PRIVATE KEY STARTS WITH:",
        process.env.FIREBASE_PRIVATE_KEY?.slice(0, 40)
    );

    try {
        const body = (await req.json()) as JobPayload;

        console.log("📥 Received job creation request:", {
            service: body.service,
            pickup: body.pickup,
            dropoff: body.dropoff,
            customer_name: body.customer_name,
            customer_phone: body.customer_phone,
            vehicle: body.vehicle,
            amountQuoted: body.amountQuoted
        });

        // Minimal validation
        if (!body?.pickup || !body?.customer_name || !body?.customer_phone) {
            console.error("❌ Validation failed - missing required fields:", {
                hasPickup: !!body?.pickup,
                hasCustomerName: !!body?.customer_name,
                hasCustomerPhone: !!body?.customer_phone
            });
            return new Response(JSON.stringify({ error: "Missing required fields (pickup, customer_name, customer_phone)" }), {
                status: 400,
                headers: { "content-type": "application/json" },
            });
        }

        // Build Firestore doc for Dispatcher Panel.
        // Content fields come ONLY from the field-whitelist (buildCreateJobContent):
        // the request body is NEVER spread, so money/status/privilege fields
        // (offerAmount, networkFee, status, paymentStatus, role, isProvider, …) can
        // never be injected by a caller. Server-owned fields are set here. (P1.4 #3.)
        const docData: Record<string, unknown> = {
            ...buildCreateJobContent(body as Record<string, unknown>),
            source: "website",
            createdAt: FieldValue.serverTimestamp(),
            // Payment tracking fields (server-owned)
            paymentStatus: "unpaid",
            paymentLinkId: null,
            squarePaymentId: null,
            squareOrderId: null,
            paymentCompletedAt: null,
        };

        console.log("💾 Attempting to save job to Firestore...");
        const ref = await adminDb.collection("live_jobs").add(docData);
        console.log("✅ Job created successfully with ID:", ref.id);

        return new Response(JSON.stringify({ ok: true, jobId: ref.id }), {
            status: 200,
            headers: { "content-type": "application/json" },
        });
    } catch (err: unknown) {
        // TODO: Add proper error logging service (e.g., Sentry)
        console.error("❌ Error in create-job API:", err);
        const errorMessage = err instanceof Error ? err.message : "An error occurred processing your request";
        console.error("Error details:", errorMessage);
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { "content-type": "application/json" },
        });
    }
}

// Allow CORS preflight if you need it from other origins later
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            "access-control-allow-origin": "*",
            "access-control-allow-methods": "POST, OPTIONS",
            "access-control-allow-headers": "content-type",
        },
    });
}
