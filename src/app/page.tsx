import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WorkIndex from "@/components/home/WorkIndex";
import Capabilities from "@/components/home/Capabilities";
import Journey from "@/components/home/Journey";
import AboutBand from "@/components/home/AboutBand";
import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/profile";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <WorkIndex />
      <Capabilities />
      <Marquee words={marqueeWords} />
      <Journey />
      <AboutBand />
      <Footer />
    </SmoothScroll>
  );
}
