"use client"

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

import "./ui.css";
import { Fade, Slide } from "react-swift-reveal";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

const SeparatorDivider = () => {
  return (
    <div className="divider div-transparent div-dot px-10 mx-auto mt-8 mb-12 lg:mt-[64px]"></div>
  );
};

const ParagraphDivider = () => {
  return (
    <Slide top>
      <Fade delay={450}>
        <div className="paragraph-divider mx-auto px-10 mt-12 mb-6"></div>
      </Fade>
    </Slide>
  );
};

export { Separator, SeparatorDivider, ParagraphDivider }
