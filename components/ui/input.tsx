import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva("flex w-full", {
  variants: {
    variant: {
      default:
        "rounded-md border border-gray-100 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      primary:
        "px-2 rounded-md border border-gray-100 focus:right-0 focus:border-primary-500 focus:outline-none focus-visible:outline-none",
      link: "border-b border-gray-500 placeholder:text-gray-100 focus-visible:outline-none",
    },
    sizeInput: {
      default: "!h-10 px-3 py-2",
      small: "!h-6 px-2 text-sm placeholder:text-sm",
      middle: "!h-14 px-4",
      large: "!h-16 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    sizeInput: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, sizeInput, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, sizeInput, className }),
          "transition-colors",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
