"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Text from "@/components/ui/typography";
import styles from "./intent-text.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const text =
  "I have passion for building products where thoughtful design and strategic engineering complement one another. I enjoy solving problems that improve developer workflows, make interfaces more intuitive, and help users accomplish tasks with less friction.";

// I build products where thoughtful design and robust engineering reinforce one another. I value harmony over novelty using hierarchy, rhythm, and restraint to make interfaces intuitive, cohesive, and rewarding to explore.

type IntentTextProps = {
  className?: string;
};

export default function IntentText({ className }: IntentTextProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !scopeRef.current) {
        return;
      }

      const split = SplitText.create(textRef.current, {
        type: "words,chars",
        wordsClass: styles.word,
        charsClass: styles.character
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 0.1,
          invalidateOnRefresh: true
        }
      });

      gsap.set(split.chars, {
        color: "var(--muted-foreground)"
      });

      split.chars.forEach((character, index) => {
        const startTime = index * 0.025;

        timeline
          .to(
            character,
            {
              color: "var(--accent)",
              duration: 0.18,
              ease: "none"
            },
            startTime
          )
          .to(
            character,
            {
              color: "var(--foreground)",
              duration: 0.24,
              ease: "none"
            },
            startTime + 0.9
          );
      });

      return () => {
        split.revert();
      };
    },
    {
      scope: scopeRef
    }
  );

  return (
    <div ref={scopeRef} className={`${styles.viewport} ${className ?? ""}`}>
      <Text as="p" variant="body-lg" className="sr-only">
        {text}
      </Text>

      <p
        ref={textRef}
        aria-hidden="true"
        className={`${styles.text} text-h3-tablet font-medium md:text-h3-tablet lg:text-h3-desktop`}
      >
        {text}
      </p>
    </div>
  );
}
