import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingSection } from "@/components/landing/landing-section";
import { LandingSectionSecond } from "@/components/landing/landing-section-second";
import { LandingSectionThree } from "@/components/landing/landing-section-three";
import { LandingFooter } from "@/components/landing/landing-footer";

export default async function Landing() {

  return (
    <>
      <main>
        <section className="mx-auto h-[100dvh] max-w-screen-xl">
          <LandingNav />
          <LandingHero />
        </section>
        <section id="landing-0" className="mx-auto h-[100dvh] w-full bg-white">
          <LandingSection />
        </section>
        <section className="mx-auto h-[100dvh] w-full bg-white">
          <LandingSectionSecond />
        </section>
        <div className="h-60 bg-white lg:hidden"></div>
        <section className="mx-auto h-[100dvh] w-full bg-white">
          <LandingSectionThree />
        </section>
        <div className="h-64 bg-white md:h-96 lg:hidden"></div>
        <section className="mx-auto mt-6 max-w-screen-xl">
          <LandingFooter />
        </section>
      </main>
    </>
  );
}