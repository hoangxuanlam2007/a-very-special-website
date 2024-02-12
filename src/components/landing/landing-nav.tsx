import { Courgette } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { GradientHeart } from "../custom-icons";

import './Landing.css';

const font = Courgette({ weight: "400", subsets: ["latin"] });

export const LandingNav = () => {
  return (
    <nav className="select-none w-[95%] xl:w-full m-auto flex items-center justify-between rounded-lg bg-white/10 px-4 py-2 shadow-2xl drop-shadow backdrop-blur-3xl mt-2">
      <div className="cursor-pointer">
        <h1 className={cn("text-base font-bold text-white", font.className)}>
          <span className="text-sm md:text-base lg:text-xl xl:text-2xl">A very special Website <GradientHeart /></span>
        </h1>
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <Button
            variant={"showlove"}
            className="showlove rounded-md border-none to-sky-blue-600 bg-gradient-to-r from-violet-700 to-indigo-500 text-white transition-colors cursor-default text-xs sm:text-sm md:text-md font-normal"
          >
            From Lâm with <span className="bg-gradient-to-r from-red-700 to-rose-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg lg:text-xl">&nbsp;❤</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
