import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "peer flex min-h-32 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink ring-offset-paper transition-all placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/40 focus-visible:ring-offset-1 focus-visible:border-magenta/60 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
