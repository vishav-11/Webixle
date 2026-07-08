import type { Metadata } from "next";
import { Hero } from "@/app/Component/sections/Hero";
import { WhyChooseUs } from "@/app/Component/sections/WhyChooseUs";
import { FAQ } from "@/app/Component/sections/FAQ";
import { Services } from "@/app/Component/sections/ServiceCard";
import { TechStack } from "./Component/sections/TechCategories";
import { WorkProcess } from "./Component/sections/HowWeWork";
import { Portfolio } from "./Component/sections/Portfolio";
import { Testimonials } from "./Component/sections/Testimonials";
import { CTABanner } from "./Component/sections/CTA";
import { HeroSlider } from "./Component/sections/HeroSection";

export const metadata: Metadata = {
  title: "Webixle — The Future of Business Automation",
  description:
    "AI-powered automation, seamless integrations, and enterprise-grade security to accelerate your business growth.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroSlider/>
      <Services />
      <WhyChooseUs />
      {/* <TechStack/> */}
      <WorkProcess/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <FAQ/>
      <CTABanner/>

    </>
  );
}