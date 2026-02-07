import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlimmeringMap } from "@/components/ui/glimmering-map";
import { HeroIllustration } from "@/components/blocks/hero-illustration";
import { HeroStats } from "@/components/blocks/hero-stats";

export const Hero = () => {
  return (
    <section className="relative py-16 lg:py-32 lg:pt-28 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none md:top-48 lg:top-100 lg:scale-130">
        <GlimmeringMap className="h-full w-full object-cover" />
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 text-center">
        {/* Main content */}
        <div className="max-w-4xl z-10 relative">
          
          <h1 className="text-foreground text-5xl tracking-tight md:text-6xl lg:text-7xl">
            B2B Data Enrichment
          </h1>

          <p className="text-muted-foreground text-md mt-5 md:text-lg lg:text-xl text-balance">
            Access 550M+ business contacts with real-time intent data across 30,000+ categories. Power your AI Agents and apps with our powerful APIs.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="default" className="" asChild>
              <a href="https://docs.b2benrich.com" className="truncate">
                See the Docs
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="https://app.b2benrich.com" className="truncate">
                Sign Up
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mt-0">
         <HeroIllustration />
      </div>

      <div className="container mt-10">
        <HeroStats />
      </div>
    </section>
  );
};
