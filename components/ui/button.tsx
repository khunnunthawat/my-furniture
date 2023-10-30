import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-gray-500 bg-transparent hover:border-gray-500/75 hover:text-gray-500/75",
        dark: "bg-white text-gray-500 hover:bg-gray-500/90",
        primary: "bg-primary-500 text-white hover:bg-primary-500/90",
        ghost:
          "text-primary-500 border-primary-500 border bg-transparent hover:border-gray-500/75 hover:text-gray-500/75",
        secondary:
          "hover:border-primary-500/75 hover:text-primary-500/75 text-primary-500 border-primary-500 border bg-white",
        outline:
          "text-primary-500 bg-white hover:border-gray-500/75 hover:bg-white hover:text-gray-500/75",
        link: "hover:text-primary-500 text-sm",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        small: "h-8 px-6 text-sm",
        middle: "h-14 px-8 py-3 text-base",
        large: "h-16 px-6 py-3 text-base",
        icon: "h-10 w-10 text-sm",
      },
      shape: {
        default: "rounded-none",
        round: "rounded-lg",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  link?: boolean;
  underline?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      link,
      underline,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          className,
          link
            ? "hover:text-primary-500" &&
                underline &&
                "underline underline-offset-4"
            : buttonVariants({ variant, size, shape }),
          "transition-colors",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
