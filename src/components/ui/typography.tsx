import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display-mobile",
        "text-display-tablet",
        "text-display-desktop",
        "text-h1-mobile",
        "text-h1-tablet",
        "text-h1-desktop",
        "text-h2-tablet",
        "text-h2-desktop",
        "text-h3-tablet",
        "text-h3-desktop",
        "text-h4-tablet",
        "text-h4-desktop",
        "text-body-lg-mobile",
        "text-body-lg-tablet",
        "text-body-lg-desktop",
        "text-body-md-mobile",
        "text-body-md-desktop",
        "text-caption-base",
        "text-fine-base"
      ]
    }
  }
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body-md"
  | "caption"
  | "fineprint";

type TextOwnProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  children?: ReactNode;
};

type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

export default function Text<T extends ElementType = "p">({
  as,
  variant = "body-md",
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;

  const variantClasses: Record<TypographyVariant, string> = {
    display:
      "text-display-tablet md:text-display-tablet lg:text-display-desktop font-medium",

    h1: "text-h1-mobile md:text-h1-tablet lg:text-h1-desktop font-semibold",

    h2: "text-h2-tablet lg:text-h2-desktop font-semibold",

    h3: "text-h3-tablet lg:text-h3-desktop font-semibold",

    h4: "text-h4-tablet lg:text-h4-desktop font-semibold",

    "body-lg":
      "text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg-desktop font-normal",

    "body-md": "text-body-md-mobile md:text-body-md-desktop font-normal",

    caption: "text-caption-base font-normal",

    fineprint: "text-fine-base font-normal"
  };

  return React.createElement(
    Component,
    {
      ...props,
      className: cn(variantClasses[variant], className)
    },
    children
  );
}
