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

export const MyThoughts = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/tinnhancuoicung.jpg"]; // Add all your image paths here
  
  return (
    <div className="grid grid-row-2 text-black max-w-6xl md:max-w-7xl lg:max-w-8xl mx-auto text-left">
      
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

        <div className="text-4xl md:text-5xl px-[20px] font-semibold text-balance mb-6 lg:mb-2">
          <span className="to-sky-blue-600 bg-gradient-to-b from-rose-700 to-pink-500 bg-clip-text text-transparent">
            Và sau đấy...
          </span>
        </div>

        <div className="main-col mt-[-20px] lg:mt-0">
          <div className="main-content">
                <div className="text-[20px] leading-[32px]">
                    <span className="main-content-paragraph my-thoughts-paragraph text-balance break-words text-justify">
                      <span className="font-semibold text-[22px] lg:text-[24px]">
                        là kỉ niệm 1 năm (13/11/2022),<br />
                      </span>
                      <span className="font-semibold text-[22px] lg:text-[24px]">
                        rồi thì 2 năm (13/11/2023) cứ thế trôi đi...<br />
                      </span>
                      <span className="text-balance break-words text-justify">
                        có biết bao nhiêu kỉ niệm buồn vui, những khoảnh khắc được bên nhau làm sao tớ có thể quên được. <span className="font-semibold text-[22px]">Những món quà, những khoảng thời gian, giây phút hạnh phúc ấy</span> bên cậu tớ vẫn luôn nhớ mãi. Cậu vẫn luôn là người mà tớ yêu thương nhất, là cả tri âm lẫn tri kỉ, luôn chia sẻ và lắng nghe câu chuyện của tớ. Có thể nói, trong số những người tớ nói chuyện, thì cậu đặc biệt hơn thảy, cậu lắng nghe và cảm thông cho những gì tớ phải trải qua, cậu cho tớ 1 cảm giác  thoải mái cho dù kể về gia đình mình. Hôm đấy tớ thấy cậu khóc sau khi nghe câu chuyện ấy là tớ biết, cậu chắc hẳn là định mệnh của đời tớ rồi. Tớ phải nắm bắt cơ hội vì với tớ, hạnh phúc chỉ đến có một lần. Tớ biết tớ không được hạnh phúc, nhưng từ khi yêu cậu, tớ biết là tớ phải có trách nhiệm với cậu, và tớ cũng cảm thấy cuộc sống này tươi đẹp hơn đến nhường nào. Cậu đến như một thiên thần vớt lấy mạng sống mong manh của tớ vậy, đến vào lúc mà tớ tuyệt vọng nhất, trầm cảm là một cái gì đó mà tại sao từ khi yêu cậu, nó như chưa từng tồn tại vậy? Cậu đem đến hy vọng sống, một ước mơ, một tương lai mà tớ có thể mong chờ, cậu giúp tớ có 1 nghị lực để tiếp tục sống tiếp… <br className=""/>
                        <div className="h-1 line-spacing"></div>
                        <span className="mr-5 tab-spacing" />
                        <span className="">
                          <span className="font-semibold text-[22px]">Thế mà… thấm thoát đã 798 ngày trôi qua</span>, không ít những lần ta cãi nhau, không ít những quãng thời gian giận dỗi. Tình yêu có nhiều giai đoạn, từ làm quen, tìm hiểu, từ giai đoạn tiến tới tình yêu, rồi ngộ nhận, và giai đoạn sóng gió nhất cũng là quãng thời gian 2 ta cãi nhau, giận dỗi nhau nhiều nhất. Lúc ấy cũng chính là khi 2 ta nhìn ra những khuyết điểm của đối phương, và càng phải học cách chấp nhận, như vậy mối quan hệ mới bền lâu được. <span className="font-semibold text-[22px]">Tớ nghĩ đi nghĩ lại, tớ hối hận</span> với những lời nói đã nói với cậu, cậu không xứng đáng chịu phải những lời nói ấy, tớ là kẻ khốn nạn mới đúng, cũng chỉ vì yêu quá mà tớ kiểm soát, cấm đoán cậu, không cho cậu được là chính mình, được làm những thứ mình thích. Tớ hối hận lắm. Biết bao những tổn thương mà 2 ta đã gây ra cho nhau, những tổn thương những sự tuyệt vọng cậu gây ra cho tớ, những lần thất hứa, lỡ hẹn, hụt hẫng nhưng tớ vẫn chấp nhận tha thứ và bỏ qua. Tình yêu là thế đấy, là cả sự vị tha và lòng bao dung nữa… Ấy thế mà, không bằng 1 lần này khi cậu đã phải nói chia tay. Rất nhiều lần tớ có ý định và đã hành hạ bản thân, tớ cố tình tự cắt cổ tay mình, nhiều lần là trước mặt cậu. Nhưng hết lần này đến lần khác tớ hứa tớ không làm vậy nữa nhưng lại không kiềm chế được sự tiêu cực của bản thân, và càng không kiềm chế được cảm xúc nóng giận của mình. Người ta nói: “Nóng giận là bản năng, kiềm chế là bản lĩnh” kia mà… Có lẽ tớ chưa đủ bản lĩnh để kiềm chế cơn giận và cảm xúc của bản thân, nên tớ xứng đáng phải chịu những sự đau đớn, ân hận dày vò hết ngày này đến ngày khác. 798 ngày – 20/01/2024, vào tối hôm ấy, khi cậu và tớ vẫn đang bình thường, thì bỗng dưng vào lúc ấy, vào khoảnh khắc mà cả đời tớ nhớ mãi, câu tin nhắn “Em nghĩ là… \ Sao ạ? \ E nghĩ mình nên dừng lại”. <span className="font-semibold text-[22px]">Đau lắm có biết không? Cả thế giới của tớ như sụp đổ</span>, cảm giác như cả thế giới đã quay lưng lại với mình, lúc ấy bất giác sự tuyệt vọng, sự tiêu cực của tớ lại dâng trào, lại chạy vội ra ga tàu định nhảy thật. Nhưng nghĩ lại, tớ vẫn cầu xin cậu, vẫn mong muốn 1 lần được sáng tỏ mọi chuyện, nên đã chạy ra ngõ nhà cậu, đợi cậu từ 8h đến hơn 10 giờ để được gặp cậu. Nhưng lúc ấy, lúc nói chuyện với cậu, tớ nhận ra tớ đã mất tất cả rồi, không còn cảm giác được yêu thương ấy nữa. Vậy là chính thức, ta mất nhau. Lúc ấy, mọi thứ đến thật bất ngờ, tớ vẫn còn yêu thương, còn quan tâm vậy mà, cậu cũng chuẩn bị gặp tớ, chuẩn bị thực hiện kế hoạch đi chơi tối hôm ấy vậy mà…
                        </span>
                      </span>
                    </span>

                  <Fade>
                    <ClickToSee />
                    <div className="my-5 gap-x-3">
                      <Image 
                        src="/tinnhancuoicung.jpg"
                        width={946}
                        height={2048}
                        alt="tin-nhan-cuoi-cung"
                        onClick={() => {
                          setIsViewerOpen(true);
                          setCurrentImage(0); // Set the index of the clicked image
                        }}
                        className="main-content-img max-h-[480px] !object-contain !w-max mx-auto"
                      />
                    </div>
                  </Fade>

                  <span className="main-content-paragraph my-thoughts-paragraph text-balance break-words text-justify">
                      <span className="text-balance break-words text-justify">
                        <div className="h-1 line-spacing"></div>
                        <span className="mr-5 tab-spacing" />
                        <span className="">
                          <span className="font-semibold text-[22px]">Cái thời gian mà tớ đang viết những dòng này</span> trên file Word cũng đã là 15h59 chiều ngày 05/02/2024 khi mà tớ đã truyền nước xong và được chuẩn đoán là đã mắc thêm Covid-19 sau 1 thời gian dài đằng đẵng phải nhập viện, tụt huyết áp chỉ vì viêm phổi nặng. Tớ hiểu rồi, chừng ấy thời gian xa nhau, tớ cũng đã nhận ra bản thân mình cần thay đổi những gì, lí do gì mà đã khiến cho mối quan hệ này rạn nứt. Thời gian qua cậu đã phải chịu đựng rất nhiều thứ, cả những tổn thương và lời nói tớ gây ra cho cậu. <span className="font-semibold text-[22px]">Tình yêu như mảnh giấy vậy</span>, giữ lỏng thì mất, mà giữ chặt thì cũng đứt. Tớ ngày nào cũng luôn sợ, sợ sẽ mất cậu, sợ người mà tớ yêu nhất sẽ phải lòng ai khác, sợ rằng giữ cậu chưa đủ chặt. Ai ngờ đâu, tớ nắm chặt quá để tình yêu này rách mất rồi… Tớ lại là kẻ cấm đoán, làm cậu tổn thương. Thực sự thời gian qua đối với tớ quá khó khăn, tớ chưa bao giờ là ổn hơn cả. Tớ nhận ra rằng trong tình yêu, cậu đúng cũng được, tớ đúng cũng được, cậu sai cũng được hay tớ sai cũng được. Tớ chọn hạnh phúc, chứ không phải so đo, hơn thua nhau ai đúng ai sai. Sẵn sàng bỏ qua hết… <span className="font-semibold text-[22px]">Miễn còn xứng đáng</span> thì cũng sẽ nhường nhịn nhau mà bên nhau. Vì cho dù kể cả khi tớ có thắng trong cuộc cãi lộn ấy, thì tớ cũng đã mất một cuộc tình rồi… Và tớ cũng nghe theo lời cậu, cũng nghe rằng tớ sẽ cố gắng tập tự tạo cho bản thân để nói chuyện với nhiều người hơn, không bám víu cậu như 1 con cún bám chủ nữa. Tớ cũng cố gắng vui vẻ hơn với mọi người, cố nói chuyện với nhiều người hơn về vấn đề của mình nhưng chưa bao giờ là cảm thấy khá hơn cả, chưa bao giờ là thoải mái hơn cả. Tớ không có cảm giác ấy, người nghe không phải là cậu, thì làm sao mà tớ có thể thoải mái hơn, nhẹ lòng hơn được cơ chứ. Cậu luôn miệng bảo rằng “Sao m ko yêu con khác”, “Thử yêu con khác xem”, “Tìm con khác để yêu mà trải nghiệm”,… tại sao chứ? Ngoài lí do cậu nói thế vì muốn tớ yêu con khác để cậu có cái cớ để yêu thằng khác ra thì thực sự tớ không nghĩ được thêm 1 lí do nào khác. <span className="font-semibold text-[22px]">Vì trong tim tớ mãi chỉ có cậu</span>, tớ yêu cậu không phải luỵ, cũng không phải vì mới chia tay được nửa tháng, càng không phải bị bắt ép, mà thực sự tình yêu tớ dành cho cậu xuất phát từ chính trái tim tớ, tại sao cậu nỡ lòng nào nói vậy? Cậu bảo tớ phải thay đổi, phải cố gắng và đừng vì cậu nữa. Tớ hiểu rồi, trước, lí do duy nhất để tớ sống và nỗ lực tiếp cũng là vì cậu, tất cả cũng là vì cậu nên bản thân cậu thấy không thoải mái, rất áp lực. <span className="font-semibold text-[22px]">Nhưng tớ hiểu rồi</span>, hiện tại tớ đang cố gắng vì muốn bản thân thay đổi, muốn trở nên tích cực hơn, tớ cố gắng vì những gì tớ muốn, tớ muốn cậu quay về bên tớ, lại là cô gái nũng nịu đáng yêu của tớ hàng ngày, tớ không thấy mệt khi nhắn tin hỏi han, nuông chiều cậu, chưa bao giờ hết. Tớ không ngần ngại bỏ tiền, bao nhiêu cũng được miễn giữ cậu lại, vì tình yêu của tớ là vô giá.
                        </span>
                        <div className="h-1 line-spacing"></div>
                        <span className="mr-5 tab-spacing" />
                        <span className="">
                          <span className="font-semibold text-[22px]">Thực sự tớ đã lên kế hoạch rất nhiều</span>, một ngày nào đó cậu cũng sẽ đọc được những dòng tâm tư này. Tớ cố gắng lắm, cho dù bản thân đau ốm bệnh tật, tớ vẫn cố gắng để 1 ngày nào đấy có thể giành lại cậu, giành lại mọi thứ tớ đã đánh mất. <span className="font-semibold text-[22px]">Tớ không biết</span>, nhưng vẫn luôn tin vào một ngày không xa, rằng cậu sẽ lại quay về bên tớ, nhõng nhẽo, muốn được cưng nịnh như em bé, muốn thấy cậu lại vui cười, hạnh phúc bên tớ. Quãng thời gian qua quả thật tuyệt vời. Tớ biết ơn cậu nhiều lắm, tớ cảm ơn cậu rất nhiều. Nhưng cũng rất xin lỗi cậu, tớ ân hận vì những gì bản thân đã làm, tớ sai rồi. <span className="font-semibold text-[22px]">Tin tớ đi, tớ nói được là làm được</span>, hơn 2 năm rồi chả nhẽ cậu không biết tớ là người như thế nào sao? Tớ bảo phấn đấu, tớ bảo tớ cố gắng tích tiền đan cho cậu chiếc túi len ấy tớ cũng đã làm và thực hiện được. Yên tâm nhé, chỉ 1 lần này thôi, 1 lần và mãi mãi, tớ sẽ không để tuột mất cậu thêm 1 lần nữa, rồi cậu cũng sẽ được làm những thứ mà cậu thích, được thoải mái với sở thích, ăn mặc của mình. <span className="font-semibold text-[22px]">Cậu sẽ không phải lo tớ kiểm soát thái quá nữa</span>, tớ sẽ đón cậu khi có cơ hội, sẽ chở cậu đi chơi kia mà, sẽ chở cậu, đón cậu đi học về. Tình yêu của tớ, suy nghĩ và tâm sự của tớ tuy dài và phức tạp thật, nhưng cũng phải để cậu hiểu rằng cậu đã giăng bẫy trong đầu tớ khiến hàng ngày trôi qua tớ không thể nào không nghĩ về cậu, về cô gái nghịch ngợm, đáng yêu và lắm chiêu ấy. <span className="font-semibold text-[22px]">Đừng lo nhé</span>, lần này quay về là một khởi đầu mới, không giống như những mối quan hệ trước của cậu đâu, đừng lo lắng nữa nhé, mọi chuyện sẽ tích cực hơn nếu hai ta cùng ngồi với nhau, kể cho nhau nghe những cảm xúc mà hai đứa đã trải qua, không dấu diếm, không lẳng lặng, không buồn bã, không over-thinking. <span className="font-semibold text-[22px]">Tất cả có gì nói đó</span>, hỏi đó kể đó, giải quyết tận nguồn của vấn đề và mình đưa ra một giải pháp cho tương lai. Đến đây rồi, tớ còn nhiều thứ muốn kể cậu lắm, nhưng xin gác lại chờ tới khi cậu quay trở về. Tất cả mọi sự nỗ lực của tớ, mọi kế hoạch, mọi thứ tớ đã thực hiện, xin được nói tóm gọn với cậu 1 câu thôi… <span className="to-sky-blue-600 bg-gradient-to-b from-rose-700 to-pink-500 bg-clip-text text-transparent font-semibold text-[22px]">Tớ yêu cậu, làm người yêu tớ nhé.</span>
                        </span>
                      </span>
                    </span>
                </div>
          </div>
        </div>
    </div>
  );
};