import React, { type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xs hover:cursor-pointer transform-color duration-200 ease-out lg:px-5 lg:py-3 lg:text-lg lg:h-12 px-4 py-2.5 text-base h-10 focus:none",
  {
    variants: {
      variant: {
        Primary:
          "bg-accent text-background hover:bg-accent-hover active:bg-accent-pressed font-medium",
        Secondary:
          "border border-foreground text-foreground hover:bg-outline-hover hover:text-accent-hover hover:border-accent-hover active:bg-outline-pressed active:text-accent-pressed active:border-accent-pressed font-normal",
        Disabled: "cursor-not-allowed bg-muted-foreground text-background"
      }
    },
    defaultVariants: {
      variant: "Primary"
    }
  }
);

export default function Button({
  variant,
  children,
  className,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const combinedClassName = twMerge(buttonVariants({ variant }), className);
  const isDisabled = disabled || variant === "Disabled";

  if (asChild && React.isValidElement(children)) {
    const child = React.Children.only(children) as ReactElement<{
      className?: string;
    }>;

    return React.cloneElement(child, {
      ...props,
      className: twMerge(combinedClassName, child.props.className)
    });
  }

  return (
    <button disabled={isDisabled} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
