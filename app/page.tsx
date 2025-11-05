"use client";
import HeroSection from "./components/HeroSection";
import AboutFanzone from "./components/AboutFanzone";
import MapSection from "./components/MapSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutFanzone />
      <MapSection />
    </main>
  );
}