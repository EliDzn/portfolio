import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { clsx } from "clsx";

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
      className: clsx("text-foreground", variantClasses[variant], className)
    },
    children
  );
}
