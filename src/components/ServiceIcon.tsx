/** Service icon component - renders appropriate SVG icon based on service name */
export function ServiceIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  const common = "w-3 h-3 sm:w-5 sm:h-5";

  if (n.includes("lock")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 10V7a6 6 0 1 1 12 0v3h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1zm2 0h8V7a4 4 0 1 0-8 0v3z" />
      </svg>
    );
  }

  if (n.includes("battery")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2 9a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9zm8.5-1.5L8 14h3l-1.5 4.5L16 12h-3l1.5-4.5z" />
      </svg>
    );
  }

  if (n.includes("tire")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 12a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6z" />
      </svg>
    );
  }

  if (n.includes("fuel") || n.includes("gas")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 3h6a2 2 0 0 1 2 2v14h-2v-6H7v6H5V5a2 2 0 0 1 2-2zm10 4h1a2 2 0 0 1 2 2v8a3 3 0 0 1-6 0v-3h2v3a1 1 0 0 0 2 0V9h-1a1 1 0 0 1-1-1V6z" />
      </svg>
    );
  }

  if (n.includes("winch") || n.includes("recovery")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 9-9v4l-5 5 5 5v4A9 9 0 0 1 3 12z" />
      </svg>
    );
  }

  if (n.includes("tow")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 15h2l3-6h5l4 4h2v3h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3z" />
      </svg>
    );
  }

  if (n.includes("emergency") || n.includes("assistance")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
      </svg>
    );
  }

  if (n.includes("parking") || n.includes("impound")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 3h10a5 5 0 0 1 0 10H8v8H4V3zm4 4v4h6a2 2 0 0 0 0-4H8z" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
