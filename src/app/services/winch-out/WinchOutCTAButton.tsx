"use client";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";

export function WinchOutCTAButton() {
  const { discountText } = useOnlineDiscount();

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-block rounded-2xl bg-[#42b3ffff] text-black px-10 py-6 font-extrabold hover:brightness-110 text-xl shadow-lg transition-all hover:scale-105 text-center overflow-hidden"
      style={{
        boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
      }}
    >
      {/* Animated shimmer effect */}
      <span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
          animation: 'shimmer 3s infinite',
        }}
      />
      <span className="relative z-10">💰 Order Online & Save {discountText}</span>
    </button>
  );
}

export function WinchOutCTAButtonLarge() {
  const { discountText } = useOnlineDiscount();

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-block rounded-3xl bg-[#42b3ffff] text-black px-16 py-8 font-black hover:brightness-110 text-3xl sm:text-4xl shadow-2xl transition-all hover:scale-105 text-center overflow-hidden"
      style={{
        boxShadow: '0 0 30px rgba(66, 179, 255, 0.6), 0 0 60px rgba(66, 179, 255, 0.4)',
      }}
    >
      {/* Animated shimmer effect */}
      <span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
          animation: 'shimmer 3s infinite',
        }}
      />
      <span className="relative z-10">💰 Order Online & Save {discountText}</span>
    </button>
  );
}
