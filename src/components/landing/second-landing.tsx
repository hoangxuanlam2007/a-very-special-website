import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const SecondLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  md:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>

      <div>
        <Image
          src="/qrlanding.png"
          alt="test"
          width={350}
          height={350}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};
