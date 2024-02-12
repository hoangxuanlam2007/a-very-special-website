"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Info, ClickToSee } from "@/components/ui/info";
import { Fade } from "react-swift-reveal";
import ImageViewer from "react-simple-image-viewer";
import { SlideUpReveal, SlideRightReveal } from "@/components/ui/animation";
import { ParagraphDivider } from "@/components/ui/separator";

const font = Open_Sans({ weight: "700", subsets: ["vietnamese"] });

export const ThirdLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/1.png", "/2.png", "/3.png"]; // Add all your image paths here
  
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
            <div className="header-col max-w-fit">
              <h1>
                <span>Tháng 10/2021</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[28px]", font.className)}>
                  Cố gắng tạo ấn tượng tốt
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="12 T2, 2024" time="11:29 AM" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Hồi ấy tớ nghiện cậu đến nỗi toàn bộ giờ học online cũng chỉ ghim mỗi camera của cậu lên để ngắm.</li>
                      <li>Ngỏ lời muốn giúp cậu chỉnh sửa server Discord để tạo ấn tượng tốt với cậu, khiến cậu không còn suy nghĩ xấu về tớ, mong phần nào để lại trong cậu một điều gì đấy đặc biệt về tớ.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="grid grid-cols-2 grid-row-2 my-5 gap-3">
                      <Image 
                        src="/1.png"
                        width={1827/2}
                        height={1080/2}
                        alt="first_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img col-span-2"
                      />
                      <Image 
                        src="/2.png"
                        width={247}
                        height={921}
                        alt="second_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(1); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                      <Image 
                        src="/3.png"
                        width={239}
                        height={785}
                        alt="second_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(1); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                    </div>
                  </Fade>

                  <ParagraphDivider />
                </div>
          </div>
        </div>
    </div>
  );
};