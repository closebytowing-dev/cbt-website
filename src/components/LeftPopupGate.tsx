'use client';

import LeftPopup from "@/components/LeftPopup";
import { useVisibility } from "@/hooks/useVisibility";

/**
 * Client-only wrapper that reads the visibility config and conditionally
 * renders the LeftPopup. Extracted so the homepage (page.tsx) can be a
 * server component instead of forcing the whole page to hydrate as client JS.
 */
export default function LeftPopupGate() {
  const { config } = useVisibility();
  if (config.customerRequestForm?.leftPopup === false) return null;
  return <LeftPopup />;
}
