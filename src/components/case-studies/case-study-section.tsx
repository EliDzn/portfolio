import { ReactNode } from "react";

import Text from "@/components/ui/typography";

type CaseStudySectionProps = {
  id: string;
  index: number;
  eyebrow: string;
  heading: string;
  children: ReactNode;
};

export default function CaseStudySection({
  id,
  eyebrow,
  heading,
  children,
  index
}: CaseStudySectionProps) {
  const label = `[${String(index).padStart(2, "0")}] - ${eyebrow}`;

  return (
    <section
      id={id}
      data-case-study-section
      aria-labelledby={`${id}-heading`}
      className="col-span-full grid grid-cols-subgrid scroll-mt-24 min-h-24"
    >
      <div className="col-span-full lg:col-start-2 lg:col-span-8 flex flex-col gap-4">
        <div className="flex flex-col gap-0.5 text-center">
          <Text variant="caption" as="p" className="text-foreground uppercase">
            {label}
          </Text>

          <Text id={`${id}-heading`} variant="h2" as="h2">
            {heading}
          </Text>
        </div>
        {children}
      </div>
    </section>
  );
}
