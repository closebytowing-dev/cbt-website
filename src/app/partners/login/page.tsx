"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PartnerLoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the signin page
    router.replace("/partners/signin");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}
