"use client"

import { SeparatorDivider } from "@/components/ui/separator";
import React from "react";
import { Slide, Fade } from "react-swift-reveal";

export const LandingSection = () => {
  return (
    <>
      <main className="p-4 text-center text-slate-900">
        <div className="mt-20 lg:mt-24 text-balance">
          <Fade duration={750}>
            <Slide bottom duration={750}>
              <div className="text-5xl font-semibold lg:text-6xl px-0 md:px-12 lg:px-20">
                Website này là dành cho cậu đó,
                <span className="to-sky-blue-600 bg-gradient-to-b from-rose-700 to-pink-500 bg-clip-text text-transparent">
                  &nbsp;Cao Tú Quyên ❤
                </span>
              </div>
            </Slide>
          </Fade>
          <Fade duration={750} delay={450}>
            <Slide bottom duration={750} delay={450}>
              <p className="mt-7 text-lg lg:text-2xl">
                Mọi thứ đã được tớ lên kế hoạch rồi, ráng đọc nhé, rồi cậu sẽ tìm thấy 1 điều bí mật được ẩn dấu ^^
              </p>
            </Slide>
          </Fade>
        </div>
        <Fade delay={900}>
          <SeparatorDivider />
        </Fade>
      </main>
    </>
  );
};