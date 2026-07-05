import React from "react";
import { cn } from "@/app/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  glass = false,
  gradient = false,
  padding = "md",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border transition-all duration-300",
        glass
          ? "bg-(--bg-glass)] backdrop-blur-xl border-(--border-card)]"
          : gradient
          ? "bg-linear-to-br from-(--bg-card)] to-(--bg-secondary)] border-(--border-card)]"
          : "bg-(--bg-card)] border-(--border-card)]",
        "shadow-(--shadow-card)]",
        hover &&
          "hover:shadow-(--shadow-xl)] hover:-translate-y-1 cursor-pointer",
        paddingStyles[padding],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <h3
    className={cn(
      "text-xl font-bold text-(--text-primary)]",
      className
    )}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <p className={cn("text-(--text-secondary)] leading-relaxed", className)}>
    {children}
  </p>
);