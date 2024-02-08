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

export { Info }