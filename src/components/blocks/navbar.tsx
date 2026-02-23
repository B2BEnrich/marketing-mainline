"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight, ArrowRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PRODUCT_LINKS, SOLUTION_LINKS } from "@/components/marketing-links";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "bg-background/70 sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
      )}
    >
      <div className="mx-4 md:mx-8 lg:mx-12 xl:mx-16">
        <div className="flex items-center justify-between py-3 lg:grid lg:grid-cols-3">
          <div className="justify-self-start">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={94}
                height={18}
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="justify-self-center max-lg:hidden">
            <NavigationMenuList>
              
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent"
                  data-active={pathname.startsWith("/products") ? "" : undefined}
                >
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                    {PRODUCT_LINKS.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                                <div className="text-muted-foreground">
                                    {item.icon}
                                </div>
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                    className="bg-transparent"
                    data-active={pathname.startsWith("/solutions") ? "" : undefined}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {SOLUTION_LINKS.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                             <div className="flex items-center gap-2">
                                <div className="text-muted-foreground">
                                    {item.icon}
                                </div>
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Docs Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="https://docs.b2benrich.com" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Docs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  active={pathname === "/pricing"}
                >
                  <Link 
                    href="/pricing"
                    className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent",
                        pathname === "/pricing" && "bg-accent text-accent-foreground"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop: Auth Buttons and Theme Toggle / Mobile: Theme Toggle and Menu */}
          <div className="flex items-center gap-2.5 justify-self-end">
            <ThemeToggle />
            <Link
              href="https://app.b2benrich.com/auth/sign-up"
              className="max-lg:hidden"
            >
              <Button variant="default">
                <span className="relative z-10">Signup</span>
              </Button>
            </Link>
            <Link
              href="https://app.b2benrich.com/auth/sign-in"
              className="max-lg:hidden"
            >
              <Button variant="outline">
                <span className="relative z-10">Login</span>
              </Button>
            </Link>

            {/* Mobile: Hamburger Menu Button */}
            <button
              className="text-muted-foreground relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y overflow-y-auto max-h-[80vh]">
          {/* Mobile Product */}
          <div className="py-4 first:pt-0">
             <button
                onClick={() => setOpenDropdown(openDropdown === "Product" ? null : "Product")}
                className="text-primary flex w-full items-center justify-between text-base font-medium"
             >
                Product
                <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === "Product" ? "rotate-90" : "",
                    )}
                />
             </button>
             <div className={cn(
                "overflow-hidden transition-all duration-300",
                openDropdown === "Product" ? "mt-4 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
             )}>
                <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                    {PRODUCT_LINKS.map(item => (
                         <Link
                            key={item.title}
                            href={item.href}
                            className="group hover:bg-accent block rounded-md p-2 transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                             <div className="flex items-center gap-2 mb-1">
                                {item.icon}
                                <span className="text-primary font-medium">{item.title}</span>
                             </div>
                             <p className="text-muted-foreground text-sm">{item.description}</p>
                          </Link>
                    ))}
                </div>
             </div>
          </div>

          {/* Mobile Solutions */}
          <div className="py-4">
             <button
                onClick={() => setOpenDropdown(openDropdown === "Solutions" ? null : "Solutions")}
                className="text-primary flex w-full items-center justify-between text-base font-medium"
             >
                Solutions
                <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === "Solutions" ? "rotate-90" : "",
                    )}
                />
             </button>
             <div className={cn(
                "overflow-hidden transition-all duration-300",
                openDropdown === "Solutions" ? "mt-4 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
             )}>
                <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                    {SOLUTION_LINKS.map(item => (
                         <Link
                            key={item.title}
                            href={item.href}
                            className="group hover:bg-accent block rounded-md p-2 transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                             <div className="flex items-center gap-2 mb-1">
                                {item.icon}
                                <span className="text-primary font-medium">{item.title}</span>
                             </div>
                             <p className="text-muted-foreground text-sm">{item.description}</p>
                          </Link>
                    ))}
                </div>
             </div>
          </div>

          <Link
            href="https://docs.b2benrich.com"
            className="text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </Link>

          <Link
            href="/pricing"
             className={cn(
                "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors",
                pathname === "/pricing" && "text-muted-foreground"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>

           <div className="py-4 flex flex-col gap-2">
                <Link href="https://app.b2benrich.com/auth/sign-in">
                    <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link href="https://app.b2benrich.com/auth/sign-up">
                    <Button variant="default" className="w-full">Signup</Button>
                </Link>
           </div>

        </nav>
      </div>
    </section>
  );
};
