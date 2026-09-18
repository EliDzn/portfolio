"use client";

import { useEffect, useState } from "react";

const BOTTOM_THRESHOLD = 2;

const CENTER_BAND_START = 0.25;
const CENTER_BAND_END = 0.75;

export default function useProgress(sectionIds: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActiveIndex = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - BOTTOM_THRESHOLD;

      if (scrolledToBottom) {
        setActiveIndex(sections.length - 1);
        return;
      }

      const viewportHeight = window.innerHeight;
      const bandTop = viewportHeight * CENTER_BAND_START;
      const bandBottom = viewportHeight * CENTER_BAND_END;

      let bestIndex = -1;
      let bestOverlap = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const overlapTop = Math.max(rect.top, bandTop);
        const overlapBottom = Math.min(rect.bottom, bandBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);

        if (overlap > bestOverlap) {
          bestOverlap = overlap;
          bestIndex = index;
        }
      });

      if (bestIndex === -1) {
        let fallbackIndex = 0;
        let fallbackVisible = -1;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visible = Math.max(0, visibleBottom - visibleTop);

          if (visible > fallbackVisible) {
            fallbackVisible = visible;
            fallbackIndex = index;
          }
        });

        bestIndex = fallbackIndex;
      }

      setActiveIndex(bestIndex);
    };

    updateActiveIndex();

    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeIndex;
}
