"use client";

import { gsap } from "@/lib/gsap";

import { cn } from "@/components/ui/typography";

const HEADER_HEIGHT = 80;

type TimelineStop = {
  id: string;
  label: string;
};

type CaseStudyTimelineProps = {
  stops: TimelineStop[];
  activeIndex: number;
  orientation: "vertical" | "horizontal";
};

export default function CaseStudyTimeline({
  stops,
  activeIndex,
  orientation
}: CaseStudyTimelineProps) {
  const isDesktop = orientation === "vertical";

  const scrollToSection = (id: string) => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.to(window, {
      duration: prefersReduced ? 0 : 0.8,
      scrollTo: {
        y: `#${id}`,
        offsetY: HEADER_HEIGHT
      },
      ease: "power2.inOut"
    });
  };

  if (stops.length === 0) return null;

  const progress = stops.length <= 1 ? 0 : activeIndex / (stops.length - 1);

  return (
    <nav
      aria-label="Case study sections"
      data-theme="dark"
      className={cn(
        "relative z-20 overflow-visible",
        isDesktop
          ? "h-[80vh]"
          : "border-t border-subtle-foreground/10 bg-background/85 px-6 py-3"
      )}
    >
      <div className={cn("relative", isDesktop ? "h-full" : "h-6 w-full")}>
        <div
          className={cn(
            "absolute",
            isDesktop
              ? "top-4 right-0 bottom-4 left-0"
              : "top-0 right-0 bottom-0 left-0"
          )}
        >
          {/* Track */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute rounded-full bg-subtle-foreground/20",
              isDesktop
                ? "top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
                : "top-1/2 right-0 left-0 h-px -translate-y-1/2"
            )}
          />

          <div
            aria-hidden="true"
            className={cn(
              "absolute rounded-full bg-foreground transition-all duration-500 ease-out",
              isDesktop
                ? "top-0 left-1/2 w-px -translate-x-1/2"
                : "top-1/2 left-0 h-px -translate-y-1/2"
            )}
            style={
              isDesktop
                ? {
                    height: `${progress * 100}%`
                  }
                : {
                    width: `${progress * 100}%`
                  }
            }
          />

          {stops.map((stop, index) => {
            const isPast = index < activeIndex;
            const isCurrent = index === activeIndex;
            const isReached = isPast || isCurrent;

            const position =
              stops.length <= 1 ? 0 : (index / (stops.length - 1)) * 100;

            return (
              <div
                key={stop.id}
                className={cn(
                  "absolute",
                  isDesktop
                    ? "left-1/2 -translate-x-1/2"
                    : "top-1/2 -translate-x-1/2 -translate-y-1/2"
                )}
                style={
                  isDesktop ? { top: `${position}%` } : { left: `${position}%` }
                }
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(stop.id)}
                  aria-current={isCurrent ? "step" : undefined}
                  aria-label={stop.label}
                  className="group relative z-10 flex items-center justify-center rounded-full p-3 -m-3 outline-none touch-manipulation hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-foreground/40"
                >
                  <span
                    className={cn(
                      "block rounded-full border transition-all duration-300 ease-out",
                      isDesktop ? "h-2.5 w-2.5" : "h-2 w-2",
                      isReached
                        ? "border-foreground bg-foreground"
                        : "border-subtle-foreground/50 bg-background group-hover:border-foreground/70",
                      isCurrent && "scale-125"
                    )}
                  />

                  {isCurrent && isDesktop && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none uppercase absolute left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 whitespace-nowrap text-body-sm text-foreground"
                    >
                      {stop.label}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
