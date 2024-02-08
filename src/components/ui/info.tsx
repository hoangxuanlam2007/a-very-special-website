"use client"

import * as React from "react";

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
        <p className="text-center italic">
            • Nhấn vào ảnh để xem •
        </p>
    );
};

const ChatLookup = ({ location }: { location: string }) => {
    return (
        <div className="max-w-fit text-amber-500 mx-auto text-base underline font-bold cursor-pointer" onClick={() => window.open(location, "_blank")}>
        Xem đoạn chat tại đây
        </div>
    );
};

export { Info, ClickToSee, ChatLookup }