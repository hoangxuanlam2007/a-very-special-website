"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Fade, Slide } from "react-swift-reveal";
import { SlideUpReveal } from "./animation";

interface InfoProps {
    date: string;
    time: string;
}

const Info: React.FC<InfoProps> = ({ date, time }) => {
    return(
        <p className="info mt-1">
            <span className="font-semibold info-author">Xuân Lâm</span>
            <span className="info-nickname">
                &nbsp;@chimmyw
            </span>
            <span> • </span>
            <span className="info-date">
                {date}
            </span>
            <span> • </span>
            <span className="info-time">
                {time}
            </span>
        </p>
    );
};

const ClickToSee = () => {
    return(
        <Fade>
            <p className="text-center italic mt-2">
                • Nhấn vào ảnh để xem full •
            </p>
        </Fade>
    );
};

const ChatLookup = ({ location, children }: { location: string, children: React.ReactNode }) => {
    return (
        // <div className="max-w-fit text-amber-500 mx-auto text-base underline font-bold cursor-pointer" onClick={() => window.open(location, "_blank")}>
        // Xem đoạn chat tại đây
        // </div>
        <SlideUpReveal>
            <div className="max-w-fit flex justify-center items-center mx-auto">
                <Button
                    onClick={() => {window.open(location, "_blank")}}
                    variant={'chatlookup'}
                    className="mb-2 rounded-sm border-none bg-primary tracking-wider text-white hover:bg-[#4a2b7c] p-3 mx-auto"
                >
                    <span className="text-xs">{children}</span>
                </Button>
            </div>
        </SlideUpReveal>
    );
};

export { Info, ClickToSee, ChatLookup }