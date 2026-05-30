"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "accent" | "shimmer";
}

export function GradientText({
  children,
  className,
  variant = "white",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        variant === "white" &&
          "bg-gradient-to-b from-white via-white/95 to-white/70",
        variant === "accent" &&
          "bg-gradient-to-r from-[#5E6AD2] via-indigo-400 to-[#5E6AD2] bg-[length:200%_100%]",
        variant === "shimmer" &&
          "bg-gradient-to-r from-[#5E6AD2] via-indigo-300 to-[#5E6AD2] bg-[length:200%_100%]",
        className
      )}
      style={
        variant === "shimmer"
          ? { animation: "shimmer 3s linear infinite" }
          : variant === "accent"
          ? { animation: "gradient-shift 4s ease infinite" }
          : undefined
      }
    >
      {children}
    </span>
  );
}
