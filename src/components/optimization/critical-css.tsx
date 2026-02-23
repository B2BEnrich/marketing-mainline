export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      /* Hero section — prevents layout shift on initial paint */
      .hero-critical {
        display: flex;
        min-height: 80vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0.5rem 1rem;
        text-align: center;
      }
      @media (min-width: 768px) {
        .hero-critical { padding: 4rem 2rem; }
      }

      /* Primary CTA button */
      .btn-critical {
        display: inline-flex;
        height: 2.5rem;
        align-items: center;
        border-radius: 0.75rem;
        background-color: hsl(var(--primary));
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsl(var(--primary-foreground));
        cursor: pointer;
      }

      /* Loading skeleton — prevents CLS during hydration */
      .loading-skeleton {
        background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--muted) / 0.5) 50%, hsl(var(--muted)) 75%);
        background-size: 200% 100%;
        animation: b2b-loading 1.5s infinite;
        border-radius: 0.75rem;
      }
      @keyframes b2b-loading {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Lock aspect ratio for hero image — prevents CLS */
      .aspect-hero { aspect-ratio: 1328 / 727; }
    `,
      }}
    />
  );
}
