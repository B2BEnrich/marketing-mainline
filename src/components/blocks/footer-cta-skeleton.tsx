import * as React from "react";

export function CTASkeleton(): React.JSX.Element {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-60">
      <div className="sr-only">
        <h2>Start your free trial today</h2>
        <p>
          Accurate, fast, and reliable B2B data enrichment to enhance your
          business data quality and insights. Sign up free to get started with
          people enrichment, company enrichment, and email verification APIs.
        </p>
      </div>
      <div
        className="container flex flex-col items-center gap-6 text-center pb-0"
        aria-hidden="true"
      >
        <div className="w-full max-w-sm mx-auto space-y-3">
          <div className="h-10 bg-muted rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
        </div>
        <div className="h-12 bg-muted rounded-full w-36" />
        <div className="h-16 bg-muted/30 rounded w-64 mx-auto mt-8" />
      </div>
    </div>
  );
}
