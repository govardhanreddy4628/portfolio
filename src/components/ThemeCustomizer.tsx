// src/components/ThemeCustomizer.tsx
import React, { useEffect, useRef, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { createPortal } from "react-dom";
import { useTheme as useNextTheme } from "next-themes";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { colorThemes } from "@/data";
import type { ColorTheme } from "@/types";

const MENU_WIDTH = 192; // w-48

const ThemeCustomizer: React.FC = () => {
  const { theme, setTheme } = useNextTheme();
  const { colorTheme, setColorTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Compute floating menu position (FIXED instead of absolute)
  function computePosition(triggerEl: HTMLElement) {
    const rect = triggerEl.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;

    const top = rect.bottom + 8; // 8px below trigger

    let left = rect.right - MENU_WIDTH;
    if (left < 8) left = 8;
    if (left + MENU_WIDTH > viewportWidth - 8)
      left = viewportWidth - MENU_WIDTH - 8;

    setMenuStyle({
      position: "fixed", // IMPORTANT fix
      top,
      left,
      width: MENU_WIDTH,
      zIndex: 9999,
    });
  }

  // Reposition on open
  useEffect(() => {
    if (open && triggerRef.current) {
      computePosition(triggerRef.current);
    }
  }, [open]);

  // Reposition on scroll/resize
  useEffect(() => {
    if (!open) return;

    function onScrollOrResize() {
      if (triggerRef.current) computePosition(triggerRef.current);
    }

    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const menu = document.getElementById("theme-customizer-portal");
      const trg = triggerRef.current;
      const target = e.target as Node;

      if (trg && trg.contains(target)) return;
      if (menu && menu.contains(target)) return;

      setOpen(false);
    }

    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const menu = open
    ? createPortal(
        <div
          id="theme-customizer-portal"
          style={menuStyle}
          className="bg-card border border-border rounded-md shadow-lg p-2"
        >
          <div className="text-xs text-muted-foreground font-medium px-2 pb-2">
            Color Theme
          </div>
          <div className="border-t border-border" />

          <div className="flex flex-col gap-1 p-2">
            {Object.entries(colorThemes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setColorTheme(key as ColorTheme);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-2 rounded-md hover:bg-accent/5 transition-colors text-sm text-left ${
                  colorTheme === key ? "font-semibold" : ""
                }`}
                type="button"
              >
                <div
                  className="w-4 h-4 rounded-full border border-border flex-shrink-0"
                  style={{ backgroundColor: `hsl(${value.primary})` }}
                />
                <span className="truncate">{value.name}</span>
              </button>
            ))}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="flex items-center gap-2" style={{ minWidth: 86 }}>
      {/* Dark/Light Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDarkMode}
        className="h-9 w-9 relative"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      {/* Color Theme Trigger */}
      <div className="w-9 h-9 flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={(e) => {
            const newState = !open;
            setOpen(newState);
            if (newState) {
              const el = triggerRef.current || (e.currentTarget as HTMLElement);
              if (el) computePosition(el);
            }
          }}
          ref={triggerRef}
        >
          <Palette className="h-5 w-5" />
        </Button>
      </div>

      {menu}
    </div>
  );
};

export default ThemeCustomizer;
