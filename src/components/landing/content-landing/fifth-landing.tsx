"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Info, ClickToSee, ChatLookup } from "@/components/ui/info";
import { Fade } from "react-swift-reveal";
import ImageViewer from "react-simple-image-viewer";
import { SlideUpReveal, SlideRightReveal } from "@/components/ui/animation";
import { ParagraphDivider } from "@/components/ui/separator";

const font = Open_Sans({ weight: "700", subsets: ["vietnamese"] });

export const FifthLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/5.png", "/5a.png"]; // Add all your image paths here
  
  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 text-black max-w-lg md:max-w-3xl lg:max-w-5xl m-auto text-left">
      
      {isViewerOpen && (
        <ImageViewer
          src={[images[currentImage]]} // Pass only the current image
          currentIndex={0} // Set the index to 0 as there's only one image
          onClose={() => setIsViewerOpen(false)}
          closeOnClickOutside={ true }
          backgroundStyle={{
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        />
      )}

        <SlideRightReveal>
            <div className="header-col special max-w-fit">
              <h1>
                <span>Ngày 13/11/2021</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[28px]", font.className)}>
                  Tớ đã thành công
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="06 T2, 2024" time="21:28 PM" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Sau một đêm khó ngủ, trằn trọc suy nghĩ, vậy là đã tới sáng hôm sau, người đầu tiên nhắn cũng là tớ.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="grid grid-cols-2 grid-row-2 my-5 gap-3">
                      <Image 
                        src="/5.png"
                        width={606}
                        height={921}
                        alt="staff_chat_5"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                      <Image 
                        src="/5a.png"
                        width={606}
                        height={921}
                        alt="staff_chat_6"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(1); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                    </div>
                  </Fade>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-chat-2.html">
                    Xem phần cắt của đoạn chat &ldquo;◜STAFF◞ |╭-𝐜𝐡𝐚𝐭&rdquo; tại đây
                  </ChatLookup>

                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Sau đó tớ tạo 1 kênh chat mới, những tin nhắn vòng vo ấy cậu còn nhớ không…?</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="grid grid-cols-2 grid-row-2 my-5 gap-3">
                      <Image 
                        src="/inv_1.png"
                        width={606}
                        height={921}
                        alt="inv_1"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                      <Image 
                        src="/inv_2.png"
                        width={606}
                        height={921}
                        alt="inv_2"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                    </div>
                  </Fade>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-chat.html">
                    Xem đoạn chat Discord tại đây
                  </ChatLookup>

                  <ParagraphDivider />
                </div>
          </div>
        </div>
    </div>
  );
};