import type { ReactNode } from "react";

import Text from "../../ui/typography";

type ExpertiseSummaryProps = {
  index: number;
  title: string;
  tags: string[];
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function ExpertiseSummary({
  index,
  title,
  tags,
  children,
  defaultOpen = false
}: ExpertiseSummaryProps) {
  return (
    <details
      open={defaultOpen}
      className="
        group
        pb-2
        [interpolate-size:allow-keywords]
        details-content:h-0
        details-content:overflow-hidden
        details-content:opacity-0
        details-content:transition-[height,opacity,content-visibility]
        details-content:duration-300
        details-content:ease-out
        details-content:transition-discrete
        open:details-content:h-auto
        open:details-content:opacity-100
      "
    >
      <summary className="list-none [&::-webkit-details-marker]:hidden">
        <div className="group/summary flex cursor-pointer items-center gap-4">
          <Text
            variant="body-md"
            className="
              text-muted-foreground
              transition-colors
              group-hover/summary:text-accent-hover
              group-open:text-foreground
            "
          >
            [{String(index).padStart(2, "0")}]
          </Text>

          <Text
            as="h3"
            variant="h3"
            className="
              uppercase
              text-muted-foreground
              transition-colors
              group-hover/summary:text-accent-hover
              group-open:text-foreground
            "
          >
            {title}
          </Text>
        </div>
      </summary>

      <div>
        <div className="pl-12">
          <div className="mb-2 flex flex-wrap gap-x-2">
            {tags.map((tag, tagIndex) => (
              <Text
                key={tag}
                as="span"
                variant="caption"
                className="text-muted-foreground"
              >
                {tag}
                {tagIndex < tags.length - 1 ? " •" : ""}
              </Text>
            ))}
          </div>

          <Text variant="body-md" className="mb-4">
            {children}
          </Text>
        </div>
      </div>
    </details>
  );
}
