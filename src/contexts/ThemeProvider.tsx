import React, { useState, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { colorThemes } from "@/data";
import type { ColorTheme } from "@/types";


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem("color-theme");
    return (saved as ColorTheme) || "blue";
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = colorThemes[colorTheme];

    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.primary);
    root.style.setProperty("--ring", theme.primary);
    root.style.setProperty("--sidebar-primary", theme.primary);
    root.style.setProperty("--sidebar-ring", theme.primary);

    const gradient = `linear-gradient(135deg, hsl(${theme.primary}) 0%, hsl(${theme.primaryGlow}) 100%)`;
    root.style.setProperty("--gradient-primary", gradient);

    const shadow = `0 0 40px hsl(${theme.primary} / 0.3)`;
    root.style.setProperty("--shadow-glow", shadow);
  }, [colorTheme]);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem("color-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
