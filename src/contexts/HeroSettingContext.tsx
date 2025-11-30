import { createContext, useContext, useEffect, useState } from "react";

const HeroSettingsContext = createContext(null);

export const HeroSettingsProvider = ({ children }) => {
  // load from localStorage first (or fallback to hero1)
  const [selectedHero, setSelectedHero] = useState(() => {
    return localStorage.getItem("selectedHero") || "hero1";
  });

  // persist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedHero", selectedHero);
  }, [selectedHero]);

  return (
    <HeroSettingsContext.Provider value={{ selectedHero, setSelectedHero }}>
      {children}
    </HeroSettingsContext.Provider>
  );
};

export const useHeroSettings = () => useContext(HeroSettingsContext);
