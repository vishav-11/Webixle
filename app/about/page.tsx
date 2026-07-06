import type { Metadata } from "next";
import { CTABanner } from "@/app/Component/sections/CTA";
import { HeroAbout } from "../Component/sections/AboutSec/HeroAbout";
import { OurStory } from "../Component/sections/AboutSec/OurStory";
import { WhatWeDo } from "../Component/sections/AboutSec/WhatWeDo";
import { WhyChooseUs } from "../Component/sections/WhyChooseUs";
import { OurValues } from "../Component/sections/AboutSec/OurValues";
import { TeamSection } from "../Component/sections/AboutSec/TeamSec";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Webixle's mission, our team, and the story behind the platform.",
};



export default function AboutPage() {
  return (
    <>
      <HeroAbout/>
      <OurStory/>
      <WhatWeDo/>
      <WhyChooseUs/>
      <OurValues/>
      {/* <TeamSection/> */}

    </>
  );
}