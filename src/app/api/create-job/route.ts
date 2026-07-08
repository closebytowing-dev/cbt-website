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

// P1.4 #3 Phase 2B — the narrow Cloud Function that replaces the Admin-SDK write.
const CREATE_CUSTOMER_JOB_URL =
    process.env.CREATE_CUSTOMER_JOB_URL ||
    "https://us-central1-closebydriverapp1.cloudfunctions.net/createCustomerJob";

/**
 * NEW path: create the job via the narrow, field-whitelisted createCustomerJob
 * Cloud Function instead of a direct Admin-SDK write. The website forwards ONLY the
 * customer payload + the shared intake secret; it holds no service-account write here.
 */
async function createViaFunction(
    body: JobPayload
): Promise<{ ok: boolean; jobId?: string; status: number; error?: string }> {
    const secret = process.env.INTAKE_SECRET || "";
    const resp = await fetch(CREATE_CUSTOMER_JOB_URL, {
        method: "POST",
        headers: { "content-type": "application/json", "x-intake-secret": secret },
        body: JSON.stringify(body),
    });
    const data = await resp.json().catch(() => ({} as Record<string, unknown>));
    if (!resp.ok) {
        return { ok: false, status: resp.status, error: (data as { error?: string }).error || `createCustomerJob ${resp.status}` };
    }
    return { ok: true, jobId: (data as { jobId?: string }).jobId, status: 200 };
}

export async function POST(req: NextRequest) {
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

        // Minimal validation (same as before)
        if (!body?.pickup || !body?.customer_name || !body?.customer_phone) {
            return new Response(JSON.stringify({ error: "Missing required fields (pickup, customer_name, customer_phone)" }), {
                status: 400,
                headers: { "content-type": "application/json" },
            });
        }

        // ── NEW PATH (flag-gated) ────────────────────────────────────────────────
        // When USE_CREATE_CUSTOMER_JOB=true, route through the narrow Cloud Function
        // (no Admin-SDK write here). Instantly revertable by clearing the flag.
        if (process.env.USE_CREATE_CUSTOMER_JOB === "true") {
            const r = await createViaFunction(body);
            if (!r.ok) {
                console.error("❌ createCustomerJob failed:", r.status, r.error);
                return new Response(JSON.stringify({ error: r.error || "Job creation failed" }), {
                    status: r.status && r.status >= 400 ? r.status : 502,
                    headers: { "content-type": "application/json" },
                });
            }
            console.log("✅ Job created via createCustomerJob:", r.jobId);
            return new Response(JSON.stringify({ ok: true, jobId: r.jobId }), {
                status: 200,
                headers: { "content-type": "application/json" },
            });
        }

        // ── OLD PATH (retained for instant revert) ───────────────────────────────
        // Direct Admin-SDK write. Content is field-whitelisted (buildCreateJobContent)
        // — the body is never spread — and server-owned fields are set here. (P1.4 #3.)
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

        console.log("💾 Attempting to save job to Firestore (Admin SDK path)...");
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
