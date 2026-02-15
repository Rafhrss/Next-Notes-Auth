import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features/>
      <CallToAction/>
      <Footer/>
    </>
    
  );
}
