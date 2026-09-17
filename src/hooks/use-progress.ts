"use client";

import { useEffect, useState } from "react";

export default function useProgress(sectionIds: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const activeSection = sections
          .filter((section) => visibleSections.has(section.id))
          .sort(
            (a, b) =>
              Math.abs(a.getBoundingClientRect().top) -
              Math.abs(b.getBoundingClientRect().top)
          )[0];

        if (!activeSection) return;

        const index = sectionIds.indexOf(activeSection.id);

        if (index !== -1) {
          setActiveIndex(index);
        }
      },
      {
        rootMargin: "-80% 0px -80% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeIndex;
}
