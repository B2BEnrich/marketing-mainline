"use client";

import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

export function DeferredScripts() {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 });
    } else {
      // Safari fallback
      const t = setTimeout(() => setShouldLoad(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <React.Suspense fallback={null}>
      <Analytics />
    </React.Suspense>
  );
}
