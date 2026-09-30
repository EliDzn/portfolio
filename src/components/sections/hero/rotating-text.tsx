"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";

gsap.registerPlugin(useGSAP);

type RotatingWordsProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
  words: string[];
  interval?: number;
  duration?: number;
};

export default function RotatingText({
  words,
  interval = 2500,
  duration = 0.5,
  className,
  ...props
}: RotatingWordsProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(
    () => {
      if (!words.length) return;

      const elements = wordsRef.current;

      gsap.set(elements, {
        yPercent: 100,
        opacity: 0
      });

      gsap.set(elements[0], {
        yPercent: 0,
        opacity: 1
      });

      let currentIndex = 0;
      let timer: gsap.core.Tween | null = null;

      const rotate = () => {
        const current = elements[currentIndex];
        const nextIndex = (currentIndex + 1) % elements.length;
        const next = elements[nextIndex];

        gsap.set(next, {
          yPercent: 100,
          opacity: 0
        });

        gsap
          .timeline()
          .to(current, {
            yPercent: -100,
            opacity: 0,
            duration,
            ease: "power3.inOut"
          })
          .to(
            next,
            {
              yPercent: 0,
              opacity: 1,
              duration,
              ease: "power3.inOut"
            },
            "<"
          );

        currentIndex = nextIndex;

        timer = gsap.delayedCall(interval / 1000, rotate);
      };

      if (words.length > 1) {
        timer = gsap.delayedCall(interval / 1000, rotate);
      }

      return () => {
        timer?.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [words, interval, duration],
      revertOnUpdate: true
    }
  );

  return (
    <span
      ref={containerRef}
      className={clsx(
        "relative inline-grid overflow-hidden align-bottom",
        className
      )}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          ref={(element) => {
            if (element) {
              wordsRef.current[index] = element;
            }
          }}
          className="col-start-1 row-start-1 whitespace-nowrap bg-transparent"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
