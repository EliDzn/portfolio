"use client";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import styles from "./mobile-nav.module.css";
import Container from "../container";

const links = [
  { href: "/#about", label: "About", type: "internal" },
  { href: "/#projects", label: "Projects", type: "internal" },
  { href: "/#expertise", label: "Expertise", type: "internal" },
  { href: "/#contact", label: "Contact", type: "internal" },
  { href: "/EliDizon_Resume.pdf", label: "Resume", type: "pdf" }
] as const;

type MobileNavProps = { isOpen: boolean; onToggle: (open: boolean) => void };

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  function toggleMenu() {
    onToggle(!isOpen);
  }

  function closeMenu() {
    onToggle(false);
  }
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
        className={[
          "relative z-30 flex size-9 items-center justify-center",
          "hover:text-accent hover:cursor-pointer",
          "transition-colors duration-150 ease-out",
          isOpen ? "text-background" : "text-foreground"
        ].join(" ")}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
        >
          <path
            className={`${styles.menuLine} ${styles.menuLineTop} ${isOpen ? styles.menuLineOpen : ""}`}
            d="M5 14H31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className={`${styles.menuLine} ${styles.menuLineBottom} ${isOpen ? styles.menuLineOpen : ""}`}
            d="M5 22H31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {mounted &&
        createPortal(
          <nav
            id="mobile-navigation"
            aria-hidden={!isOpen}
            className={isOpen ? styles.menuOpen : styles.menu}
          >
            <Container>
              <ul className="flex flex-col items-end gap-6 pt-24 text-background">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.type === "pdf" ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="block pr-2 text-h1-mobile font-medium uppercase transition-colors hover:text-accent-hover"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        tabIndex={isOpen ? 0 : -1}
                        className="block pr-2 text-h1-mobile font-medium uppercase transition-colors hover:text-accent-hover"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Container>
          </nav>,
          document.body
        )}
    </div>
  );
}
