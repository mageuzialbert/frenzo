import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "peer flex h-12 w-full rounded-xl border border-ink/15 bg-paper px-4 py-2 text-base text-ink ring-offset-paper transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/40 focus-visible:ring-offset-1 focus-visible:border-magenta/60 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
