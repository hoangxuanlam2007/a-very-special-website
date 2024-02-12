import { Slide, Fade } from "react-swift-reveal";

export const SlideUpReveal= ({ children }: { children: React.ReactNode }) => (
  <Slide bottom>
    <Fade>
      {children}
    </Fade>
  </Slide>
);

export const SlideRightReveal = ({ children }: { children: React.ReactNode }) => (
  <Slide left>
    <Fade>
      {children}
    </Fade>
  </Slide>
);