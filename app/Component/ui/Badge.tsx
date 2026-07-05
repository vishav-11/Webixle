import React from "react";
import { cn } from "@/app/lib/utils";

type BadgeVariant =
  | "primary"
  | "accent"
  | "success"
  | "warning"
  | "info"
  | "neutral";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 ring-1 ring-primary-200 dark:ring-primary-800",
  accent:
    "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300 ring-1 ring-accent-200 dark:ring-accent-800",
  success:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-800",
  warning:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 ring-1 ring-yellow-200 dark:ring-yellow-800",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-1 ring-blue-200 dark:ring-blue-800",
  neutral:
    "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] ring-1 ring-[var(--border-primary)]",
};

const dotColors: Record<BadgeVariant, string> = {
  primary: "bg-primary-500",
  accent: "bg-accent-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
  neutral: "bg-gray-400",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  children,
  className,
  dot = false,
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
};