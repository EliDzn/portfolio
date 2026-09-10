"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CursorTooltip from "./cursor-tooltip";

type ProjectGridProps = {
  children: React.ReactNode;
};

export default function ProjectGrid({ children }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const activeCardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const tooltip = tooltipRef.current;

    if (!grid || !tooltip) {
      return;
    }

    const supportsPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!supportsPointer.matches) {
      return;
    }

    const getCard = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return null;
      }

      const card = target.closest<HTMLElement>("[data-project-card]");

      return card && grid.contains(card) ? card : null;
    };

    const moveTooltip = (event: PointerEvent) => {
      gsap.to(tooltip, {
        x: event.clientX + 16,
        y: event.clientY + 16,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const showTooltip = (event: PointerEvent, card: HTMLElement) => {
      activeCardRef.current = card;

      gsap.killTweensOf(tooltip);

      gsap.set(tooltip, {
        x: event.clientX + 12,
        y: event.clientY + 12,
        scale: 0.9,
        autoAlpha: 0
      });

      gsap.to(tooltip, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.15,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const hideTooltip = () => {
      activeCardRef.current = null;

      gsap.to(tooltip, {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.1,
        ease: "power2.in",
        overwrite: "auto"
      });
    };

    const handlePointerOver = (event: PointerEvent) => {
      const card = getCard(event.target);
      const previousCard = getCard(event.relatedTarget);

      if (!card || card === previousCard) {
        return;
      }

      showTooltip(event, card);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const card = getCard(event.target);

      if (!card || activeCardRef.current !== card) {
        return;
      }

      moveTooltip(event);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const card = getCard(event.target);
      const nextCard = getCard(event.relatedTarget);

      if (!card || card === nextCard) {
        return;
      }

      if (activeCardRef.current === card) {
        hideTooltip();
      }
    };

    grid.addEventListener("pointerover", handlePointerOver);
    grid.addEventListener("pointermove", handlePointerMove);
    grid.addEventListener("pointerout", handlePointerOut);

    return () => {
      grid.removeEventListener("pointerover", handlePointerOver);
      grid.removeEventListener("pointermove", handlePointerMove);
      grid.removeEventListener("pointerout", handlePointerOut);

      gsap.killTweensOf(tooltip);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="relative col-span-full grid grid-cols-1 gap-1 lg:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]"
    >
      {children}
      <CursorTooltip tooltipRef={tooltipRef} />
    </div>
  );
}
