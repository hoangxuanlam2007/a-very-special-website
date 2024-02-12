"use client"

import { SeparatorDivider } from "@/components/ui/separator";
import React from "react";
import { Slide, Fade } from "react-swift-reveal";

export const LastLanding = () => {
  return (
    <>
      <main className="p-4 text-center text-slate-900">
        <Fade delay={900}>
          <SeparatorDivider />
        </Fade>
      </main>
    </>
  );
};