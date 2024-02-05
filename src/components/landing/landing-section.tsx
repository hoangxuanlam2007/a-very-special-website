import React from "react";
import { SecondLanding } from "./second-landing";

export const LandingSection = () => {
  return (
    <main className="p-4 text-center text-slate-900">
      <div className="mt-24">
        <div className="text-5xl font-semibold lg:text-6xl px-0 md:px-12 lg:px-20">
          Website này là dành cho cậu đó,
          <span className="to-sky-blue-600 bg-gradient-to-b from-rose-700 to-pink-500 bg-clip-text  text-transparent">
            &nbsp;Cao Tú Quyên ❤
          </span>{" "}
        </div>
        <p className="mt-4 text-base lg:text-xl">
          Mọi thứ đã được tớ lên kế hoạch rồi, ráng đọc nhé, rồi cậu sẽ tìm thấy 1 điều bí mật được ẩn dấu ^^
        </p>
      </div>
      <div className=" p-8 lg:mt-8 lg:p-16">
        <SecondLanding />
      </div>
    </main>
  );
};