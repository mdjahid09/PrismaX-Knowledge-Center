import React from 'react';

// @ts-ignore
import logoTransparent from '../../logo transparent.png';
// @ts-ignore
import logo3 from '../../logo3.png';
// @ts-ignore
import logoPrismax01 from '../../logo-prismax-01.jpg';
// @ts-ignore
import logoPrismax02 from '../../logo-prismax-02.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
  theme?: 'dark' | 'light';
  variant?: 'primary' | 'v1' | 'v2';
}

export default function Logo({ className = '', size = 'md', light = true, theme, variant = 'primary' }: LogoProps) {
  // Define size-specific heights to maintain aspect ratio without distortion
  const sizingClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-12 sm:h-14',
    lg: 'h-20 sm:h-24',
    xl: 'h-32 sm:h-40 md:h-48'
  };

  // Determine logo source
  let logoSrc = logoTransparent; // Use logo transparent as default/primary
  if (variant === 'v1') {
    logoSrc = logoPrismax01;
  } else if (variant === 'v2') {
    logoSrc = logoPrismax02;
  }

  // Adjust for background light levels if primary variant is requested
  // "Use logo variations for dark backgrounds when needed."
  if (variant === 'primary' && !light) {
    logoSrc = logoPrismax01; // alternate black/color layout if background is light
  }

  // Determine if we should render dark theme styling (inverted with premium glow) or light theme styling with elegant drop shadow
  const isDark = theme === 'dark' || (theme === undefined && typeof document !== 'undefined' && (document.getElementById('root-viewport')?.classList.contains('dark') || document.documentElement.classList.contains('dark')));

  const logoStyleClasses = isDark
    ? "invert brightness-[1.8] contrast-[1.3] drop-shadow-[0_0_20px_rgba(197,168,128,0.25)]"
    : "brightness-100 drop-shadow-[0_3px_12px_rgba(138,101,56,0.18)]";

  return (
    <div className={`flex items-center ${className}`} id={`logo-prismas-${size}`}>
      <img
        src={logoSrc}
        alt="PrismaX Logo"
        className={`${sizingClass[size]} w-auto object-contain max-w-full ${logoStyleClasses} transition-all duration-300 hover:scale-[1.02]`}
        referrerPolicy="no-referrer"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
}
