"use client";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { useVisibility } from "@/hooks/useVisibility";

export default function TowTruckLandingCTA({ large = false }: { large?: boolean }) {
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
      className={`${large ? 'px-12 py-5 text-xl sm:text-2xl' : 'px-8 py-4 text-lg sm:text-xl'}
                 rounded-2xl font-extrabold text-white shadow-2xl
                 transition-all hover:shadow-[0_0_40px_rgba(255,186,66,0.5)]
                 active:scale-[.98] overflow-hidden border-2 border-white/30
                 flex items-center justify-center gap-3 w-full sm:w-auto`}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
      }}
    >
      Get Exact Price — Save {discountText}
    </button>
  );
}
