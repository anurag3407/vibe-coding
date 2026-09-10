import React from "react";
import { clsx } from "clsx";

export interface BauhausCardProps {
  children: React.ReactNode;
  className?: string;
  badgeShape?: "circle" | "square" | "triangle";
  badgeColor?: "red" | "blue" | "yellow" | "black";
  headerTitle?: string;
  headerColor?: "red" | "blue" | "yellow" | "black" | "white";
  hoverEffect?: boolean;
}

export const BauhausCard: React.FC<BauhausCardProps> = ({
  children,
  className,
  badgeShape = "square",
  badgeColor = "red",
  headerTitle,
  headerColor,
  hoverEffect = true,
}) => {
  const badgeColors = {
    red: "bg-[#D02020]",
    blue: "bg-[#1040C0]",
    yellow: "bg-[#F0C020]",
    black: "bg-[#121212]",
  };

  const headerColors = {
    red: "bg-[#D02020] text-white",
    blue: "bg-[#1040C0] text-white",
    yellow: "bg-[#F0C020] text-[#121212]",
    black: "bg-[#121212] text-white",
    white: "bg-white text-[#121212]",
  };

  return (
    <div
      className={clsx(
        "relative bg-white border-2 md:border-4 border-[#121212] shadow-hard-md md:shadow-hard-xl rounded-none transition-transform duration-200",
        hoverEffect && "hover:-translate-y-1",
        className
      )}
    >
      {/* Corner geometric ornament */}
      <div className="absolute -top-3 -right-3 z-10">
        {badgeShape === "circle" && (
          <div
            className={clsx(
              "w-6 h-6 rounded-full border-2 border-[#121212] shadow-hard-sm",
              badgeColors[badgeColor]
            )}
          />
        )}
        {badgeShape === "square" && (
          <div
            className={clsx(
              "w-6 h-6 rounded-none border-2 border-[#121212] shadow-hard-sm rotate-45",
              badgeColors[badgeColor]
            )}
          />
        )}
        {badgeShape === "triangle" && (
          <div
            className={clsx(
              "w-6 h-6 clip-triangle border-2 border-[#121212]",
              badgeColors[badgeColor]
            )}
          />
        )}
      </div>

      {headerTitle && (
        <div
          className={clsx(
            "px-4 py-2 border-b-2 md:border-b-4 border-[#121212] font-black uppercase tracking-wider text-xs md:text-sm flex items-center justify-between",
            headerColor ? headerColors[headerColor] : "bg-[#121212] text-white"
          )}
        >
          <span>{headerTitle}</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40 border border-black/20" />
            <span className="w-2.5 h-2.5 rounded-none bg-white/40 border border-black/20" />
          </div>
        </div>
      )}

      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
};
