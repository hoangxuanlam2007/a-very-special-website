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

export const FourthLanding = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/3a.png", "/inv_1.png", "/inv_2.png"]; // Add all your image paths here
  
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
                <span>Ngày 12/11/2021</span>
              </h1>
            </div>
        </SlideRightReveal>

        <div className="main-col col-span-4 mt-[-20px] lg:mt-0">
          <div className="main-content">
            <SlideUpReveal>
              <h1 className={cn("text-2xl md:text-4xl lg:text-[28px]", font.className)}>
                  Tớ đã thành công!
              </h1>
            </SlideUpReveal>

              <SlideUpReveal>
                <Info date="12 T2, 2024" time="13:41 PM" />
              </SlideUpReveal>

                <div className="mt-3">
                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Vậy là cậu đã biết sự thật rồi, sau khi nghe Đăng kể, cậu bắt đầu tra hỏi tớ, thắc mắc và đặt ra rất nhiều nghi vấn, liệu có phải tớ thích cậu không?</li>
                      <li>Cậu bắt đầu tỏ ra quan tâm tớ hơn, muốn biết suy nghĩ của tớ, tỏ ra gần gũi với tớ hơn, lại còn xưng “chị-em” cơ chứ, chắc cậu phải lòng tớ rồi, không phải do gửi ảnh mèo nhiều đâu ha.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="my-5 gap-x-3">
                      <Image 
                        src="/3a.png"
                        width={606}
                        height={921}
                        alt="discord_group_chat"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px] !object-contain !w-max mx-auto"
                      />
                    </div>
                  </Fade>

                  <SlideUpReveal>
                    <span className="main-content-paragraph">
                      <li>Thực ra tớ có mấy con lận, nhưng vì không nhớ hôm trước dùng con nào nên bốc tạm 2 con này rồi tốn thêm 90k để đổi tên chụp cho cậu xem, vẫn ngại, vẫn chưa dám bày tỏ cảm xúc.</li>
                      <li>Tối hôm ấy tớ bảo chúng ta cùng ngủ, để rồi sáng mai sẽ nói thật mọi chuyện. Công nhận tối hôm ấy, cái cảm giác ấy, như một tình yêu nhen nhóm trong lòng rồi, có lẽ cả hai đều đã biết nhưng chẳng qua chỉ là chưa dám bày tỏ thôi.</li>
                    </span>
                  </SlideUpReveal>

                  <Fade>
                    <ClickToSee />
                    <div className="grid grid-cols-2 grid-row-2 my-5 gap-3">
                      <Image 
                        src="/inv_1.png"
                        width={740}
                        height={1080}
                        alt="inv_1"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(1); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                      <Image 
                        src="/inv_2.png"
                        width={954}
                        height={1080}
                        alt="inv_2"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(2); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px]"
                      />
                    </div>
                  </Fade>

                  <ChatLookup location="/html/Lói-không-ngừng-staff-chat.html">
                    Xem toàn bộ đoạn chat &ldquo;◜STAFF◞ |╭-𝐜𝐡𝐚𝐭&rdquo; tại đây
                  </ChatLookup>

                  <ParagraphDivider />
                </div>
          </div>
        </div>
    </div>
  );
};