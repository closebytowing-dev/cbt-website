"use client";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";

export function TireChangeCTAButton() {
  const { discountText } = useOnlineDiscount();

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  return (
    <button
      onClick={handleClick}
      className="group relative px-10 py-6 rounded-2xl font-black text-2xl sm:text-3xl text-white shadow-2xl
                 transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.8)]
                 active:scale-[.98] hover:animate-none hover:scale-105
                 overflow-hidden border-4 border-white flex items-center justify-center gap-3 w-full sm:w-auto
                 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2"
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

export function TireChangeCTAButtonLarge() {
  const { discountText } = useOnlineDiscount();

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  return (
    <button
      onClick={handleClick}
      className="px-16 py-8 rounded-3xl font-extrabold text-3xl sm:text-4xl text-white shadow-2xl
                 transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.8)]
                 active:scale-[.98] hover:animate-none hover:scale-110
                 overflow-hidden border-4 border-white flex items-center justify-center gap-4
                 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-4 focus:ring-offset-slate-900"
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

export function FinalCTAButton() {
  const { discountText } = useOnlineDiscount();

  const handleClick = () => {
    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
    if (popup) popup.click();
  };

  return (
    <button
      onClick={handleClick}
      className="group relative px-12 py-6 rounded-2xl font-black text-xl sm:text-2xl text-white shadow-2xl
                 transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.8)]
                 active:scale-[.98] hover:animate-none hover:scale-110
                 overflow-hidden border-4 border-white flex items-center justify-center gap-3
                 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2"
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
