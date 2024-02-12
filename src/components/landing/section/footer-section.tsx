import React from "react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Courgette } from "next/font/google";
import { User } from "next-auth";

import { GradientHeart } from "../../custom-icons";

const font = Courgette({ weight: "400", subsets: ["latin"] });

type LandingNavProps = {
  user?: User;
};

export const LandingFooter = () => {
  return (
    <div className="bg-[#07071b] py-10 text-center lg:text-left">
      <div className="flex flex-col justify-around gap-4 p-4 text-white lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 ">
          <h2 className={cn("text-3xl", font.className)}>A very special Website <GradientHeart /></h2>
          <h5>
            Hand-crafted with by&nbsp;<GradientHeart />&nbsp;
            <Link href="https://github.com/hoangxuanlam2007" target="_blank">Lâm</Link>
          </h5>
        </div>
        <Separator className="bg-pink-900 lg:hidden" />
        <p className="text-center">Copyright © {new Date().getFullYear()} <a className="hover:text-neutral-300 transition ease-in-out" href="https://github.com/hoangxuanlam2007" target="_blank" rel="norreferer">hoangxuanlam2007</a></p>
      </div>
    </div>
  );
};
