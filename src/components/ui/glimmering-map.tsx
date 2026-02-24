"use client";

import { useState } from "react";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function GlimmeringMap({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [imgError, setImgError] = useState(false);

  const svgFile = resolvedTheme === "dark" ? "/map-dark.svg" : "/map.svg";

  if (imgError) return null;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden opacity-20 dark:opacity-15",
        className,
      )}
    >
      {/* Static <img> — no fetch(), no DOM animation loop, no JS overhead */}
      <img
        src={svgFile}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
