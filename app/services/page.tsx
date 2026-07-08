import type { Metadata } from "next";
import { HeroServices } from "../Component/sections/ServicesSec/HeroServices";
import { ServicesOverview } from "../Component/sections/ServicesSec/ServicesOverview";
import { WebDevelopment } from "../Component/sections/ServicesSec/WebDevelopment";
import { MobileAppDev } from "../Component/sections/ServicesSec/MobileApp";
import { BlockchainWeb3 } from "../Component/sections/ServicesSec/BlockchainWeb3";
import { UIUXDesign } from "../Component/sections/ServicesSec/UIUX";
import { GraphicBranding } from "../Component/sections/ServicesSec/GraphicBranding";
import { VideoMotion } from "../Component/sections/ServicesSec/VideoMotion";
import { DigitalMarketing } from "../Component/sections/ServicesSec/DigitalMarketing";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Webixle's full suite of services — AI automation, cloud infrastructure, data analytics, enterprise security, and more.",
};



export default function ServicesPage() {
  return (
    <>
      <HeroServices/>
      <ServicesOverview/>
      {/* <WebDevelopment/>
      <MobileAppDev/>
      <BlockchainWeb3/>
      <UIUXDesign/>
      <GraphicBranding/>
      <VideoMotion/>
      <DigitalMarketing/> */}
    
    </>
  );
}
