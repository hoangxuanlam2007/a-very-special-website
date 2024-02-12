import { LandingHero } from "@/components/landing/section/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingSection } from "@/components/landing/section/landing-section";
import { FirstLanding } from "@/components/landing/content-landing/first-landing";
import { LandingSectionSecond } from "@/components/landing/section/landing-section-second";
import { LandingSectionThree } from "@/components/landing/section/landing-section-three";
import { LandingSectionFour } from "@/components/landing/section/landing-section-four";
import { LandingFooter } from "@/components/landing/section/footer-section";

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
        
        <section id="landing-1" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <FirstLanding />
        </section>
        <section id="landing-2" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <LandingSectionSecond />
        </section>
        <section id="landing-3" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <LandingSectionThree />
        </section>
        <section id="landing-4" className="mx-auto w-full bg-white landing-section m-auto mt-0">
          <LandingSectionFour />
        </section>

        <div className="h-64 bg-white md:h-96 lg:hidden"></div>
        <section className="mx-auto mt-6 max-w-[100dvw]">
          <LandingFooter />
        </section>
      </main>
    </>
  );
}