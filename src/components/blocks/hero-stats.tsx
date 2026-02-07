export const HeroStats = () => {
  return (
    <div className="container relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-4">
      <div className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 py-3 shadow-sm">
        <span className="text-foreground text-md font-semibold md:text-lg">100+</span>
        <span className="text-muted-foreground ml-2 text-sm md:text-base">customers</span>
      </div>
      <div className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 py-3 shadow-sm">
        <span className="text-foreground text-md font-semibold md:text-lg">100M+</span>
        <span className="text-muted-foreground ml-2 text-sm md:text-base">API calls/month</span>
      </div>
      <div className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 py-3 shadow-sm">
        <span className="text-foreground text-md font-semibold md:text-lg">99%</span>
        <span className="text-muted-foreground ml-2 text-sm md:text-base">uptime</span>
      </div>
    </div>
  );
};
