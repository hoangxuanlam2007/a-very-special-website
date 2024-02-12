import { LandingHero } from "@/components/landing/section/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingSection } from "@/components/landing/section/landing-section";
import { LandingSectionSecond } from "@/components/landing/section/landing-section-second";
import { LandingSectionThree } from "@/components/landing/section/landing-section-three";
import { LandingFooter } from "@/components/landing/section/footer-section";
import { FirstLanding } from "@/components/landing/content-landing/first-landing";
import { ParagraphDivider } from "@/components/ui/separator";

export default async function Landing() {

  return (
    <>
      <main>
        <section className="mx-auto h-[100dvh] max-w-screen-xl">
          <LandingNav />
          <LandingHero />
        </section>
        <section id="landing-0" className="mx-auto h-full w-full bg-white">
          <LandingSection />
        </section>
        {/* Ke hoach dau tien sau 2 nam... */}
        <section id="landing-1" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <FirstLanding />
        </section>
        <section id="landing-2" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <LandingSectionSecond />
        </section>
        <div className="h-60 bg-white lg:hidden"></div>
        <section className="mx-auto h-[100dvh] w-full bg-white">
          <LandingSectionThree />
        </section>
        <div className="h-64 bg-white md:h-96 lg:hidden"></div>
        <section className="mx-auto mt-6 max-w-[100dvw]">
          <LandingFooter />
        </section>
      </main>
    </>
  );
}