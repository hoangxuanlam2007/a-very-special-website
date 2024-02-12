"use client"

import React from "react";
import { Slide, Fade } from "react-swift-reveal";
import { MyThoughts } from "../content-landing/mythoughts";

export const MyThoughtsSection = () => {
  return (
    <>
      <main className="text-center text-slate-900">
        <div className="mb-10">
          <MyThoughts />
        </div>
      </main>
    </>
  );
};