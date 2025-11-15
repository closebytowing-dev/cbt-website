// src/app/api/create-job/route.ts
import { NextRequest } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

import { FieldValue } from "firebase-admin/firestore";

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
    try {
        const body = (await req.json()) as JobPayload;

        // Minimal validation
        if (!body?.pickup || !body?.customer_name || !body?.customer_phone) {
            return new Response(JSON.stringify({ error: "Missing required fields (pickup, customer_name, customer_phone)" }), {
                status: 400,
                headers: { "content-type": "application/json" },
            });
        }

        // Build Firestore doc for Dispatcher Panel
        const docData: Record<string, unknown> = {
            customerName: body.customer_name,
            customerPhone: body.customer_phone,
            pickupLocation: body.pickup,
            dropoffLocation: body.dropoff || "",
            vehicle: body.vehicle || "", // MVP: single string
            service: body.service || "",
            source: "website",
            createdAt: FieldValue.serverTimestamp(),
            // Payment tracking fields
            paymentStatus: "unpaid",
            paymentLinkId: null,
            squarePaymentId: null,
            squareOrderId: null,
            paymentCompletedAt: null,
        };

        // Optional fields
        if (body.amountQuoted != null) docData.amountQuoted = Number(body.amountQuoted);
        if (body.jobUid) docData.jobUid = body.jobUid;
        if (body.year) docData.year = body.year;
        if (body.make) docData.make = body.make;
        if (body.model) docData.model = body.model;
        if (body.color) docData.color = body.color;

        const ref = await adminDb.collection("live_jobs").add(docData);

        return new Response(JSON.stringify({ ok: true, jobId: ref.id }), {
            status: 200,
            headers: { "content-type": "application/json" },
        });
    } catch (err: unknown) {
        // TODO: Add proper error logging service (e.g., Sentry)
        console.error("❌ Error in create-job API:", err);
        return new Response(JSON.stringify({ error: "An error occurred processing your request" }), {
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
