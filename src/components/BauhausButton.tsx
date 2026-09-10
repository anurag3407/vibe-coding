"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

export interface BauhausButtonProps {
  children: React.ReactNode;
  variant?: "red" | "blue" | "yellow" | "black" | "white" | "outline";
  shape?: "square" | "pill";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const BauhausButton: React.FC<BauhausButtonProps> = ({
  children,
  variant = "red",
  shape = "square",
  size = "md",
  href,
  onClick,
  className,
  disabled = false,
}) => {
  const variantStyles = {
    red: "bg-[#D02020] text-white hover:bg-[#D02020]/90",
    blue: "bg-[#1040C0] text-white hover:bg-[#1040C0]/90",
    yellow: "bg-[#F0C020] text-[#121212] hover:bg-[#F0C020]/90",
    black: "bg-[#121212] text-white hover:bg-[#121212]/90",
    white: "bg-white text-[#121212] hover:bg-zinc-100",
    outline: "bg-transparent text-[#121212] hover:bg-black/5",
  };

  const shapeStyles = {
    square: "rounded-none",
    pill: "rounded-full",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-hard-sm",
    md: "px-5 py-2.5 text-sm font-bold uppercase tracking-wider border-2 md:border-4 border-[#121212] shadow-hard-md",
    lg: "px-8 py-3.5 text-base md:text-lg font-black uppercase tracking-widest border-4 border-[#121212] shadow-hard-lg",
  };

  const combinedStyles = clsx(
    "inline-flex items-center justify-center gap-2 font-black transition-all duration-150 select-none btn-tactile cursor-pointer",
    variantStyles[variant],
    shapeStyles[shape],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
};
