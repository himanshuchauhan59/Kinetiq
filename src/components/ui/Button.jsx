import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  onClick,
  type = 'button',
  disabled = false,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-medium'
  };

  const variantStyles = {
    // White pill on dark blue hero
    heroPrimary: 'bg-[#FBFBF9] text-[#013b61] hover:bg-[#FFFFFF] hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] border border-white/20 focus:ring-sky-400',
    // Dark blue pill on light background
    primary: 'bg-[#013b61] text-[#FBFBF9] hover:bg-[#204862] hover:shadow-[0_4px_20px_rgba(1,59,97,0.2)] border border-[#013b61] focus:ring-[#013b61]',
    // Subtle frosted glass on dark blue
    heroSecondary: 'bg-white/10 text-[#FBFBF9] hover:bg-white/15 border border-white/20 backdrop-blur-md focus:ring-white/40',
    // Subtle grey on warm canvas
    secondary: 'bg-[#F0EFEA] text-[#111614] hover:bg-[#E6E4DC] border border-[#E2DFD6] focus:ring-[#111614]',
    // Refined minimalist border
    outline: 'bg-transparent text-[#111614] border border-[#D5D2C8] hover:border-[#111614] hover:bg-[#111614]/5 focus:ring-[#111614]',
    // Dark outline
    heroOutline: 'bg-transparent text-[#FBFBF9] border border-white/25 hover:border-white hover:bg-white/5 focus:ring-white/50',
    // Subtle link style
    ghost: 'bg-transparent text-[#013b61] hover:text-[#204862] hover:underline p-0'
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}

