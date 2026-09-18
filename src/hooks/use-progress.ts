"use client";

import { useEffect, useState } from "react";

const TRIGGER_OFFSET = 120;

export default function useProgress(sectionIds: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActiveIndex = () => {
      let nextIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top - TRIGGER_OFFSET <= 0) {
          nextIndex = i;
        }
      }

      setActiveIndex(nextIndex);
    };

    updateActiveIndex();

    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [sectionIds.join(",")]);

  return activeIndex;
}
