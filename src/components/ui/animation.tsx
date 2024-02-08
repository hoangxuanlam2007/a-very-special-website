import { Slide, Fade } from "react-swift-reveal";

export const SlideUpReveal= ({ children }: { children: React.ReactNode }) => (
  <Slide bottom duration={850}>
    <Fade>
      {children}
    </Fade>
  </Slide>
);

export const SlideRightReveal = ({ children }: { children: React.ReactNode }) => (
  <Slide left duration={850}>
    <Fade>
      {children}
    </Fade>
  </Slide>
);