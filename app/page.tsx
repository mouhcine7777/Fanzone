"use client";
import StickyMenu from "./components/StickyMenu";
import HeroSection from "./components/HeroSection";
import AboutFanzone from "./components/AboutFanzone";
import EspacesSection from "./components/EspacesSection";
import SponsorsSection from "./components/SponsorsSection";
import MapSection from "./components/MapSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <main>
       <StickyMenu />
      <HeroSection />
      <EspacesSection />
      <AboutFanzone />
      <SponsorsSection />
      <MapSection />
      <FooterSection />
    </main>
  );
}