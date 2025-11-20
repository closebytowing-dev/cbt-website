"use client";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { useVisibility } from "@/hooks/useVisibility";

export default function JumpStartCTAButton() {
  const { discountText } = useOnlineDiscount();
  const { config } = useVisibility();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  if (!showBanners) return null;

  return (
    <button
      onClick={handleClick}
      className="px-10 py-6 rounded-2xl font-extrabold text-xl sm:text-2xl text-white shadow-2xl
                 transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.8)]
                 active:scale-[.98] hover:animate-none
                 overflow-hidden border-4 border-white flex items-center justify-center gap-3 w-full sm:w-auto"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
      }}
    >
      <span style={{ color: 'red' }}>💰</span> Order Online & Save {discountText}
    </button>
  );
}
