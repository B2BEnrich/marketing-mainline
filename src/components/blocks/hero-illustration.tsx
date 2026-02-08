"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Copy, Database, Linkedin, Mail, Search, User } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

const API_SAMPLES = [
  {
    id: "person",
    label: "Enrich Person",
    icon: User,
    method: "POST",
    endpoint: "/v1/enrich/person",
    code: `{
  "email": "alex@acme.com",
  "enrichment": {
    "name": "Alex Johnson",
    "title": "VP of Engineering",
    "company": "Acme Corp",
    "linkedin": "linkedin.com/in/alexj",
    "location": "San Francisco, CA"
  }
}`
  },
  {
    id: "company",
    label: "Enrich Company",
    icon: Database,
    method: "POST",
    endpoint: "/v1/enrich/company",
    code: `{
  "domain": "acme.com",
  "enrichment": {
    "name": "Acme Corp",
    "industry": "Software",
    "employees": 500,
    "founded": 2015,
    "location": "San Francisco, CA",
    "linkedin": "linkedin.com/company/acme"
  }
}`
  },
  {
    id: "search",
    label: "Search Database",
    icon: Search,
    method: "POST",
    endpoint: "/v1/prospector/search",
    code: `{
  "filters": {
    "job_title": ["VP of Engineering"],
    "location": ["San Francisco, CA"],
    "industry": ["Software"]
  },
  "results": [
    {
      "name": "Alex Johnson",
      "company": "Acme Corp"
    },
    {
      "name": "Sarah Miller",
      "company": "TechFlow"
    }
  ]
}`
  }
];

export const HeroIllustration = () => {
  const [activeTab, setActiveTab] = useState("person");
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  
  const activeSample = API_SAMPLES.find(s => s.id === activeTab) || API_SAMPLES[0];
  const [displayedCode, setDisplayedCode] = useState(activeSample.code);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const targetCode = activeSample.code;
    setDisplayedCode("");
    
    const intervalId = setInterval(() => {
      setDisplayedCode(targetCode.slice(0, index));
      index += 8; // Speed up typing by adding 8 chars at a time
      if (index > targetCode.length) {
        setDisplayedCode(targetCode);
        clearInterval(intervalId);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [activeTab, activeSample.code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-12 flex w-full flex-col items-center justify-center gap-8 lg:mt-12 lg:flex-row lg:items-start">
      {/* Tabs + Code Block */}
      <div className="flex w-full max-w-2xl flex-col gap-4 lg:flex-row lg:items-start">
        {/* Tabs */}
        <div className="flex shrink-0 flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 p-1 lg:flex lg:flex-col lg:p-0">
            {API_SAMPLES.map((sample, index) => {
                const Icon = sample.icon;
                return (
                <button
                    key={sample.id}
                    onClick={() => setActiveTab(sample.id)}
                    className={cn(
                    "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                    activeTab === sample.id 
                        ? "bg-muted border-primary/20 text-primary" 
                        : "bg-background border-transparent text-muted-foreground hover:text-foreground",
                    index === API_SAMPLES.length - 1 && "col-span-1"
                    )}
                >
                    <Icon className="h-4 w-4" />
                    <span className="whitespace-nowrap">{sample.label}</span>
                </button>
                );
            })}
            <div className="col-span-1 flex items-center justify-start px-3 text-xs text-muted-foreground lg:hidden">
                And 20+ others
            </div>
            </div>
            <p className="hidden text-xs text-muted-foreground/70 lg:block lg:pl-3 mt-2">
                And 20+ other solutions
            </p>
        </div>

        {/* Code Block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full min-w-0 flex-1"
        >
          <div className="w-full">
              <CodeBlock className="shadow-lg">
                  <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                      <div className="flex items-center gap-2">
                          <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                              {activeSample.method}
                          </div>
                          <span className="text-muted-foreground truncate text-sm">
                              {activeSample.endpoint}
                          </span>
                      </div>
                      <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={handleCopy}
                      >
                          {copied ? (
                              <Check className="h-4 w-4 text-green-500" />
                          ) : (
                              <Copy className="h-4 w-4" />
                          )}
                      </Button>
                  </CodeBlockGroup>
                  <div className="h-[320px] overflow-y-auto bg-white dark:bg-background">
                    <CodeBlockCode 
                        code={displayedCode} 
                        language="json"
                        theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                        className="p-4 text-xs lg:text-sm bg-transparent"
                    />
                  </div>
              </CodeBlock>
          </div>
        </motion.div>
      </div>

      {/* Right: Data Table */}
      
    </div>
  );
};
