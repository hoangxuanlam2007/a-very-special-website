"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Info } from "@/components/ui/info";
import { Slide, Fade } from "react-swift-reveal";
import ImageViewer from "react-simple-image-viewer";
const font = Open_Sans({ weight: "700", subsets: ["latin"] });

export const FirstLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/dao1.png", "/dao2.png"]; // Add all your image paths here
  
  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 text-black max-w-lg md:max-w-3xl lg:max-w-5xl m-auto">
      
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

        <Slide left duration={750}>
          <Fade>
            <div className="header-col max-w-fit">
              <h1>
                <span>Ngày 24/05/2021</span>
              </h1>
            </div>
          </Fade>
        </Slide>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <Slide bottom duration={750}>
              <Fade>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[24px]", font.className)}>
                  Kế hoạch đầu tiên sau 2 năm...
              </h1>
              </Fade>
            </Slide>

            <Slide bottom duration={750}>
              <Fade>
                <Info date="06 T2, 2024" time="21:28 PM" />
              </Fade>
            </Slide>

            <Slide bottom duration={850}>
              <Fade>
                <div className="mt-3">
                  <span>
                    <li>Tớ đã chuẩn bị kỹ lưỡng, sau 2 năm đơn phương, tớ cuối cùng cũng tìm được cơ hội…</li>
                    <li>Vài con dao cũng chục củ trong CS:GO, đều được đặt tên là “wuynsiucutephomaique”, “iuquyen&lt;3”, “quyencute:3”</li>
                  </span>
                  <Fade>
                    <div className="grid grid-cols-2 mt-3 gap-x-5">
                      <Image 
                        src="/dao1.png"
                        width={783}
                        height={619}
                        alt="first_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                      />
                      <Image 
                        src="/dao2.png"
                        width={783}
                        height={619}
                        alt="second_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(1); // Set the index of the clicked image
                        }}
                      />
                    </div>
                  </Fade>
                </div>
              </Fade>
            </Slide>
          </div>
        </div>
    </div>
  );
};