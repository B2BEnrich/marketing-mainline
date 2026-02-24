"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function GlimmeringMap({ className }: { className?: string }) {
  const [svgContent, setSvgContent] = useState<string>("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const svgFile = resolvedTheme === "dark" ? "/map-dark.svg" : "/map.svg";
        const response = await fetch(svgFile);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch {
        // Silently fail if SVG cannot be loaded
        setSvgContent("");
      }
    };

    if (mounted) {
      loadSVG();
    }
  }, [resolvedTheme, mounted]);

  useEffect(() => {
    if (!svgContent) return;

    // Skip animations for reduced-motion preference (Lighthouse, accessibility)
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const timer = setTimeout(() => {
      const rects = document.querySelectorAll("#map-svg rect");

      const style = document.createElement("style");
      style.textContent = `
        @keyframes glimmer {
          0% { opacity: 1; }
          100% { opacity: 0.1; }
        }
      `;
      document.head.appendChild(style);

      rects.forEach((rect) => {
        const duration = Math.random() * 1.5 + 0.5;
        const delay = Math.random() * 1;
        rect.setAttribute(
          "style",
          `animation: glimmer ${duration}s ease-in-out ${delay}s infinite alternate;`,
        );
      });

      return () => clearTimeout(timer);
    }, 100);

    return () => clearTimeout(timer);
  }, [svgContent]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden opacity-20 dark:opacity-15 dark:grayscale-0",
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        {svgContent ? (
          <div
            id="map-svg"
            className="flex h-full w-full items-center justify-center [&>svg]:h-full [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-muted/20" />
        )}
      </div>
    </div>
  );
}
