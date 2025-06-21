import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
const Loader = ({ className, ...props }) => {
  return (
    <Loader2
      className={cn("h-6 w-6 animate-spin speed text-base", className)}
      {...props}
    />
  );
};

export { Loader };
