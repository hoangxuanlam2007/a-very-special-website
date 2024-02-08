"use client"
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Dancing_Script, Inter } from "next/font/google";
import { TypewriterLandingComponent } from "../content-landing/typewrite-landing";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";
import { ChevronDown } from "lucide-react";
import { scrollToElementWithId } from "@/components/ui/button";

const font = Inter({
  weight: "600",
  subsets: ["latin"],
});

const font2 = Dancing_Script({
  weight: "700",
  subsets: ["vietnamese"],
});

type LandingHeroProps = {
  user?: User;
};

export const LandingHero = ({}: LandingHeroProps) => {
  return (
    <div className="space-y-5 py-48 text-center font-bold text-white">
      <div
        className={cn(
          "animate-fade-in-up space-y-7 p-1 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl",
          font.className,
        )}
      >
        <h1 className="max-w-[50rem] leading-[1.15] text-center m-auto">Một Website vô cùng đặc biệt dành cho</h1>
        <div
          className={cn(
            "h-fit bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text md:text-7xl lg:text-8xl text-transparent md:h-32 m-auto text-center w-max-fit",
            font2.className,
          )}
        >
          <TypewriterLandingComponent />
        </div>
      </div>
      <div className="mt-10 space-y-5 text-center">
        <Button
            onClick={() => scrollToElementWithId("landing-0")}
            variant="outline"
            className="animate-[fade-in-up_1.5s_ease-in-out] rounded-sm border-none bg-primary tracking-wider text-white transition-colors hover:bg-[#4a2b7c] hover:text-white px-5 py-5"
          >
            Ấn vào đây nè
        </Button>
        <ChevronDown className="mt-chevron m-auto animate-[fade-in-up_1.5s_ease-in-out,bounce_infinite_1s] text-white" />
      </div>
    </div>
  );
};
