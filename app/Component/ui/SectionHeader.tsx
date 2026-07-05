import React from "react";
import { cn } from "@/app/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <Badge variant="primary" dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-primary)] mb-4 text-balance",
          "animate-in"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-lg text-(--text-secondary)] leading-relaxed text-balance animate-in-delay-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};