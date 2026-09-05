"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type PreloaderProps = {
  onComplete: () => void;
  duration?: number;
};

const SIZE = 160;
const STROKE = 4;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Preloader({
  onComplete,
  duration = 2.5
}: PreloaderProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useRef({ value: 0 });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const timeline = gsap.timeline();

    timeline
      .to(progress.current, {
        value: 100,
        duration,
        ease: "none",
        onUpdate: () => {
          const value = Math.round(progress.current.value);

          if (numberRef.current) {
            numberRef.current.textContent = String(value);
          }

          if (circleRef.current) {
            circleRef.current.style.strokeDashoffset = String(
              CIRCUMFERENCE * (1 - progress.current.value / 100)
            );
          }
        }
      })
      .to(container, {
        yPercent: 100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.2,
        onComplete
      });

    return () => {
      timeline.kill();
    };
  }, [duration, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground backdrop:blur-sm"
      aria-hidden="true"
    >
      <div className="relative size-40">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90 "
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="currentColor"
            strokeWidth={STROKE}
            fill="none"
            className="text-muted-foreground"
          />

          <circle
            ref={circleRef}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="currentColor"
            strokeWidth={STROKE}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            className="text-background"
          />
        </svg>

        <span
          ref={numberRef}
          className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-background"
        >
          0
        </span>
        <p className="absolute left-1/2 top-[calc(100%+4rem)] -translate-x-1/2 whitespace-nowrap text-center text-h4-desktop font-medium text-background">
          Optimizing experience...
        </p>
      </div>
    </div>
  );
}
