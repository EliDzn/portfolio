import { ViewTransition, type ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      default="none"
      enter={{
        default: "none",
        "project-forward": "page-enter-forward",
        "project-back": "none"
      }}
      exit={{
        default: "none",
        "project-back": "page-exit-back"
      }}
    >
      <div className="min-h-screen">{children}</div>
    </ViewTransition>
  );
}
