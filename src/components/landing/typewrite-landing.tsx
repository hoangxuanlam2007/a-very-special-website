"use client";
import Typewriter from "typewriter-effect";

export const TypewriterLandingComponent = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Một người phụ nữ đặc biệt.").start().pauseFor(1000);
      }}
      options={{
        loop: true,
        delay: 90,
      }}
    />
  );
};
