"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "./navbar";
import MobileNav from "./mobile-nav/mobile-nav";
import Container from "./container";
import { cn } from "@/components/ui/typography";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isRouteLight = pathname.startsWith("/projects");
  const isLight = isOpen || isRouteLight;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      data-theme={isLight ? "dark" : undefined}
      className={cn(
        "fixed z-30 w-full transition-colors duration-300 bg-transparent",
        isOpen ? "backdrop-blur-none" : "backdrop-blur-xs"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Eli Dizon"
            width={103}
            height={46}
            priority
            className={cn(
              "h-auto w-20.25 transition-[filter] duration-300 md:w-20.75",
              isLight && "brightness-0 invert"
            )}
          />
        </Link>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <MobileNav isOpen={isOpen} onToggle={setIsOpen} />
      </Container>
    </header>
  );
}
