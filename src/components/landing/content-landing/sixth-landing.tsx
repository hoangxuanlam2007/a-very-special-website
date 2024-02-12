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

export const SixthLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/6.png"]; // Add all your image paths here
  
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
                <span>Ngày 13/11/2021 – 8h45 sáng</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[28px]", font.className)}>
                  Vậy là ta đã là của nhau
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="12 T2, 2024" time="17:12 PM" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Mình chính thức thuộc về nhau sau khi cả hai cùng bày tỏ tình cảm.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="my-5 gap-x-3">
                      <Image 
                        src="/6.png"
                        width={606}
                        height={921}
                        alt="staf-darling-2"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px] !object-contain !w-max mx-auto"
                      />
                    </div>
                  </Fade>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-darlingg-2.html">
                    Xem phần cắt của đoạn chat &ldquo;◜STAFF◞ | ⊦-𝓭𝓪𝓻𝓵𝓲𝓷𝓰𝓰&rdquo; tại đây
                  </ChatLookup>

                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li className="mb-5">Tớ còn tạo thêm 1 kênh chat mới để cậu gửi ảnh nữa, dù vài ba bức ấy nhưng với tớ khi được nhìn, được ngắm lại là bao cảm xúc lại ùa về. </li>
                    </span>
                  </SlideUpReveal>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-ảnh-wuynn.html">
                    Xem toàn bộ đoạn chat &ldquo;◜STAFF◞ | ⊦-𝐚̉𝐧𝐡-𝐰𝐮𝐲𝐧𝐧&rdquo; tại đây
                  </ChatLookup>

                  <ParagraphDivider />
                </div>
          </div>
        </div>
    </div>
  );
};