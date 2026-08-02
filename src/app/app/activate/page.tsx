import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set up your CloseBy Pro account",
  robots: { index: false, follow: false },
};

/**
 * Fallback page for the provider approval link (https://closebytowing.com/app/activate?t=…).
 *
 * When the CloseBy Pro app is installed, iOS intercepts this URL and opens the app on the
 * "Set your password" screen (Universal Links) — this page never renders. It only shows
 * when the app ISN'T installed, so it points the applicant to the app.
 */
export default function ActivateFallbackPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1524",
        color: "#EAF1F8",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 420, textAlign: "center" }}>
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            marginBottom: 12,
          }}
        >
          You&rsquo;re approved 🎉
        </div>
        <p style={{ color: "#9FB0C6", fontSize: 16, lineHeight: 1.55, margin: "0 0 22px" }}>
          Open this link on your iPhone with the{" "}
          <strong style={{ color: "#EAF1F8" }}>CloseBy Pro</strong> app installed to set your
          password and finish setting up your account.
        </p>
        <p style={{ color: "#7C8BA3", fontSize: 14, lineHeight: 1.55, margin: "0 0 26px" }}>
          Don&rsquo;t have the app yet, or need help? We&rsquo;ve got you.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <a
            href="mailto:CLOSEBYTOWING@GMAIL.COM"
            style={{
              background: "#1F6BFF",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 26px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Email us
          </a>
          <a href="tel:+18589999293" style={{ color: "#5AA9FF", fontSize: 14, textDecoration: "none" }}>
            or call (858) 999-9293
          </a>
        </div>
      </div>
    </main>
  );
}
