import {
  Children,
  type ComponentProps,
  type ReactElement,
  type ReactNode
} from "react";

import CaseStudySection from "./case-study-section";
import CaseStudyNavigation from "./case-study-navigation";

type SectionProps = ComponentProps<typeof CaseStudySection>;
type CaseStudySectionElement = ReactElement<SectionProps>;

type CaseStudyBodyProps = {
  children: ReactNode;
};

export default function CaseStudyBody({ children }: CaseStudyBodyProps) {
  const sectionElements = Children.toArray(
    children
  ) as CaseStudySectionElement[];

  const stops = sectionElements.map((child) => ({
    id: child.props.id,
    label: child.props.eyebrow
  }));

  return (
    <div className="col-span-full grid grid-cols-subgrid mb-16">
      <CaseStudyNavigation stops={stops}>{children}</CaseStudyNavigation>
    </div>
  );
}
