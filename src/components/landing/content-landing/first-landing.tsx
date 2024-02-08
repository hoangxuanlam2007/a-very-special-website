"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Info } from "@/components/ui/info";
import { Slide, Fade } from "react-swift-reveal";
import ImageViewer from "react-simple-image-viewer";
import { SlideUpReveal, SlideRightReveal } from "@/components/ui/animation";
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

        <SlideRightReveal>
            <div className="header-col max-w-fit">
              <h1>
                <span>Ngày 24/05/2021</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[24px]", font.className)}>
                  Kế hoạch đầu tiên sau 2 năm...
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="06 T2, 2024" time="21:28 PM" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span>
                      <li>Tớ đã chuẩn bị kỹ lưỡng, sau 2 năm đơn phương, tớ cuối cùng cũng tìm được cơ hội…</li>
                      <li>Vài con dao cũng chục củ trong CS:GO, đều được đặt tên là “wuynsiucutephomaique”, “iuquyen&lt;3”, “quyencute:3”</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <div className="grid grid-cols-2 my-5 gap-x-3">
                      <Image 
                        src="/dao1.png"
                        width={783}
                        height={619}
                        alt="first_knife"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        style={{'zIndex': '1'}}
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
                        style={{'zIndex': '1'}}
                      />
                    </div>
                  </Fade>

                  <SlideUpReveal>
                    <span>
                      <li>Thậm chi tớ còn dò hỏi, tạo 1 acc facebook và 1 acc Discord  mới. Tớ tự nhắn với chính bản thân mình, giả vờ rằng là tớ đã thua 1 thử thách trên mạng, và bây giờ phải tỏ tình với 1 người trong lớp có tên có chữ cái đầu tiên là “Q”. Tớ làm vậy là để đề phòng lỡ cậu có từ chối tớ, tớ cũng sẽ không quê. Cậu thấy tớ có lắm trò không? Giở đủ trò để tán cậu á ^^ Với cả lần này thất bại cũng không sao, chỉ là thăm dò thui.</li>
                    </span>
                  </SlideUpReveal>

                </div>

          </div>
        </div>
    </div>
  );
};