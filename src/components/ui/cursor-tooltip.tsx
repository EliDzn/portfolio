import type { RefObject } from "react";

type CursorTooltipProps = {
  tooltipRef: RefObject<HTMLSpanElement | null>;
};

export default function CursorTooltip({ tooltipRef }: CursorTooltipProps) {
  return (
    <span
      ref={tooltipRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold leading-4 text-background opacity-0"
    >
      View Project
    </span>
  );
}
