"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Text from "@/components/ui/typography";
import styles from "./cylinder-text.module.css";

gsap.registerPlugin(useGSAP);

const text = "THE FAMILIAR, REIMAGINED THE FAMILIAR, REIMAGINED - ";

export default function CylinderText({ className }: { className?: string }) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      const cylinder = cylinderRef.current;

      if (!scope || !cylinder) {
        return;
      }

      const characters = Array.from(
        cylinder.querySelectorAll<HTMLElement>("[data-cylinder-character]")
      );

      if (!characters.length) {
        return;
      }

      let resizeFrame = 0;

      const setCylinder = () => {
        const glyphWidth = characters[0]?.getBoundingClientRect().width ?? 0;

        if (glyphWidth <= 0) {
          return;
        }

        const angle = 360 / characters.length;
        const radius =
          (glyphWidth / (2 * Math.tan(Math.PI / characters.length))) * 0.76;

        gsap.set(characters, {
          transform: (index) =>
            `translate(-50%, -50%) rotateY(${index * angle}deg) translateZ(${radius}px)`
        });
      };

      const refreshCylinder = () => {
        cancelAnimationFrame(resizeFrame);

        resizeFrame = requestAnimationFrame(() => {
          rotation.pause();
          setCylinder();
          rotation.invalidate().restart();
        });
      };

      gsap.set(cylinder, {
        rotateX: -6,
        rotateY: 0,
        transformOrigin: "center center"
      });

      setCylinder();

      const rotation = gsap.to(cylinder, {
        rotateY: 360,
        duration: 18,
        ease: "none",
        repeat: -1
      });

      const resizeObserver = new ResizeObserver(refreshCylinder);
      resizeObserver.observe(scope);

      document.fonts?.ready.then(refreshCylinder);

      return () => {
        cancelAnimationFrame(resizeFrame);
        resizeObserver.disconnect();
        rotation.kill();
      };
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef} className={`${styles.viewport} ${className ?? ""}`}>
      <Text as="span" variant="display" className="sr-only">
        {text}
      </Text>

      <span
        ref={cylinderRef}
        aria-hidden="true"
        className={`${styles.cylinder} text-display-mobile md:text-display-tablet lg:text-display-desktop`}
      >
        {Array.from(text).map((character, index) => (
          <span
            key={`${character}-${index}`}
            data-cylinder-character
            className={styles.character}
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
    </div>
  );
}
