import React from 'react';

const Logo = ({ size = 36, variant = "default" }) => {
  // variant: 'default' (auto adapts/dark badge on light, white badge on dark showcase) or 'inverted'
  const isShowcase = variant === "showcase";

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-xl flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 duration-200 ${
        isShowcase
          ? 'bg-white border border-white/20'
          : 'bg-black border border-zinc-800'
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        width={size * 0.72}
        height={size * 0.72}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Calendar Grid & Time Synchronizer Vector Motif */}
        {/* Outer Grid Bounds */}
        <rect
          x="3"
          y="5"
          width="26"
          height="22"
          rx="4.5"
          stroke={isShowcase ? "#09090b" : "#ffffff"}
          strokeWidth="2.2"
        />
        
        {/* Top Header Bar */}
        <path
          d="M3 11.5H29"
          stroke={isShowcase ? "#09090b" : "#ffffff"}
          strokeWidth="2"
        />

        {/* Top Pegs / Schedule Pins */}
        <path
          d="M9 3V6M23 3V6"
          stroke={isShowcase ? "#09090b" : "#ffffff"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Dynamic 'S' curve / Matrix flow lines */}
        <path
          d="M8.5 16.5H12.5M8.5 21.5H12.5"
          stroke={isShowcase ? "#52525b" : "#a1a1aa"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Central Precision Clock Sync Element */}
        <circle
          cx="20.5"
          cy="19"
          r="5.5"
          fill={isShowcase ? "#ffffff" : "#000000"}
          stroke={isShowcase ? "#09090b" : "#ffffff"}
          strokeWidth="2"
        />

        {/* Clock Hands pointing at 3:00 / Sync position */}
        <path
          d="M20.5 16V19L22.5 20.2"
          stroke={isShowcase ? "#09090b" : "#ffffff"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
