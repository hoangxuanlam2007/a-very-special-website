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

export const SeventhLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/monquadautien.jpg"]; // Add all your image paths here
  
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
                <span>Ngày 22/11/2021<br/>10:33 AM</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[28px]", font.className)}>
                  Kỉ vật đầu tiên
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="12 T2, 2024" time="17:38" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Dù chỉ là 2 chiếc ốp điện thoại, nhưng chúng đã trở thành biểu tượng quan trọng của tình yêu chúng ta, là kỉ vật đánh dấu cho những kỷ niệm đáng nhớ.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="my-5 gap-x-3">
                      <Image 
                        src="/monquadautien.jpg"
                        width={606}
                        height={921}
                        alt="mon-qua-dau-tien"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px] !object-contain !w-max mx-auto"
                      />
                    </div>
                  </Fade>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-ảnh-wuynn.html">
                    Xem toàn bộ đoạn chat &ldquo;◜STAFF◞ | ⊦-𝐚̉𝐧𝐡-𝐰𝐮𝐲𝐧𝐧&rdquo; tại đây
                  </ChatLookup>
                </div>
          </div>
        </div>
    </div>
  );
};