"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import MobileNav from "./mobile-nav/mobile-nav";
import Container from "./container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      className={[
        "fixed z-30 w-full transition-colors duration-300",
        isOpen
          ? "bg-foreground backdrop-blur-none"
          : "bg-background/70 backdrop-blur-xs"
      ].join(" ")}
    >
      <Container className="flex h-20 items-center justify-between">
        <Image
          src="/logo.svg"
          alt="Eli Dizon"
          width={103}
          height={46}
          priority
          className={[
            "h-auto w-20.25 transition-[filter] duration-300 md:w-20.75",
            isOpen ? "brightness-0 invert" : ""
          ].join(" ")}
        />

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <MobileNav isOpen={isOpen} onToggle={setIsOpen} />
      </Container>
    </header>
  );
}
