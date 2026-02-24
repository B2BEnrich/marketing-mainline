import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/components/marketing-links";

export function Footer() {
  return (
    <footer className="px-2 pb-10 pt-20 sm:container">
      <h2 className="sr-only">Footer</h2>
      <div className="container">
        <div className="xl:grid xl:grid-cols-6 xl:gap-8">
          <div className="hidden xl:block">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="B2BEnrich"
                width={120}
                height={24}
                className="dark:invert"
              />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Accurate B2B data enrichment API for sales, marketing, and
              revenue operations teams.
            </p>
            <div className="mt-4">
              <Link
                href="https://app.b2benrich.com/auth/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-70 transition-opacity"
              >
                Get started free
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 xl:col-span-5 xl:grid-cols-4">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        title={link.name}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="relative inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                        {link.external && (
                          <ArrowUpRight className="size-3 opacity-60" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} B2BEnrich. All rights reserved. Built in California. 🌴
            </p>
            <div className="flex flex-row items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  title={link.name}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              ))}
              <Separator orientation="vertical" className="h-4" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
