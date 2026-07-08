// src/app/api/create-job/route.ts
import { NextRequest } from "next/server";

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

// P1.4 #3 Step C — the website creates jobs ONLY via the narrow createCustomerJob
// Cloud Function (server-side field-whitelist). The website holds NO Firebase Admin
// service account; it forwards the payload + the shared intake secret. Requires
// INTAKE_SECRET to be set.
const CREATE_CUSTOMER_JOB_URL =
    process.env.CREATE_CUSTOMER_JOB_URL ||
    "https://us-central1-closebydriverapp1.cloudfunctions.net/createCustomerJob";

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

        const secret = process.env.INTAKE_SECRET || "";
        const resp = await fetch(CREATE_CUSTOMER_JOB_URL, {
            method: "POST",
            headers: { "content-type": "application/json", "x-intake-secret": secret },
            body: JSON.stringify(body),
        });
        const data = await resp.json().catch(() => ({} as Record<string, unknown>));
        if (!resp.ok) {
            const error = (data as { error?: string }).error || `createCustomerJob ${resp.status}`;
            console.error("❌ createCustomerJob failed:", resp.status, error);
            return new Response(JSON.stringify({ error }), {
                status: resp.status >= 400 ? resp.status : 502,
                headers: { "content-type": "application/json" },
            });
        }
        return new Response(JSON.stringify({ ok: true, jobId: (data as { jobId?: string }).jobId }), {
            status: 200,
            headers: { "content-type": "application/json" },
        });
    } catch (err: unknown) {
        console.error("❌ Error in create-job API:", err);
        const errorMessage = err instanceof Error ? err.message : "An error occurred processing your request";
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
