import { ReactNode } from "react";
import PageGrid from "@/components/layout/page-grid";

type CaseStudyLayoutProps = {
  children: ReactNode;
};

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <div
      data-theme="dark"
      className="bg-background text-foreground min-h-screen"
    >
      <PageGrid>{children}</PageGrid>
    </div>
  );
}
