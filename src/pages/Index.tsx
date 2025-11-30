import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useHeroSettings } from "@/contexts/HeroSettingContext";
import HeroSettingsModal from "@/components/HeroSettingsModal";
import { useEffect, useState } from "react";

const Index = () => {
  const { selectedHero } = useHeroSettings();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const openListener = () => setSettingsOpen(true);
    window.addEventListener("open-hero-settings", openListener);
    return () => window.removeEventListener("open-hero-settings", openListener);
  }, []);

  return (
    <div className="min-h-screen">

      <Navigation />

      {/* Show selected hero only */}
      {selectedHero === "hero1" && <Hero />}
      {selectedHero === "hero2" && <Hero2 />}
      {selectedHero === "hero3" && <Hero3 />}

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <HeroSettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default Index;
