"use client";

import type { ReactNode } from "react";

import useProgress from "@/hooks/use-progress";

import CaseStudyTimeline from "./timeline/case-study-timeline";

type TimelineStop = {
  id: string;
  label: string;
};

type CaseStudyNavigationProps = {
  stops: TimelineStop[];
  children: ReactNode;
};

export default function CaseStudyNavigation({
  stops,
  children
}: CaseStudyNavigationProps) {
  const sectionIds = stops.map(({ id }) => id);
  const activeIndex = useProgress(sectionIds);

  return (
    <>
      <aside className="sticky top-24 col-span-1 hidden self-start lg:block">
        <CaseStudyTimeline
          stops={stops}
          activeIndex={activeIndex}
          orientation="vertical"
        />
      </aside>

      <div
        id="case-study-sections"
        className="col-span-full grid grid-cols-subgrid gap-y-24 lg:col-span-11"
      >
        <div className="sticky top-20 z-20 col-span-full lg:hidden">
          <CaseStudyTimeline
            stops={stops}
            activeIndex={activeIndex}
            orientation="horizontal"
          />
        </div>

        {children}
      </div>
    </>
  );
}
