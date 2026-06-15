"use client";

import { useEffect } from "react";

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "es";
    return () => {
      document.documentElement.lang = "en";
    };
  }, []);

  return <>{children}</>;
}
