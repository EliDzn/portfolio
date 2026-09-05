import type { ReactNode } from "react";
import Container from "./container";

type PageGridProps = {
  children: ReactNode;
  className?: string;
};

export default function PageGrid({ children }: PageGridProps) {
  return (
    <Container>
      <div className="grid w-full grid-cols-4 gap-(--spacing-grid-mobile) md:grid-cols-8 md:gap-(--spacing-grid-tablet) lg:grid-cols-12 lg:gap-(--spacing-grid-desktop)">
        {children}
      </div>
    </Container>
  );
}
