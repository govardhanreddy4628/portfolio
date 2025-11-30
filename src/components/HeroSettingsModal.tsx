// src/components/HeroSettingsModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useHeroSettings } from "@/contexts/HeroSettingContext";
import { useTheme } from "@/contexts/ThemeContext";
import { colorThemes } from "@/data";
import type { ColorTheme } from "@/types";

interface Props {
  open: boolean;
  onClose: () => void;
}

const HeroSettingsModal: React.FC<Props> = ({ open, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { selectedHero, setSelectedHero } = useHeroSettings();
  const { colorTheme, setColorTheme } = useTheme();

  const [tempHero, setTempHero] = useState(selectedHero);
  const [tempTheme, setTempTheme] = useState<ColorTheme>(colorTheme);

  /** Sync when modal opens */
  useEffect(() => {
    if (open) {
      setTempHero(selectedHero);
      setTempTheme(colorTheme);
    }
  }, [open]);

  /** Close on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  const applyChanges = () => {
    setSelectedHero(tempHero);
    setColorTheme(tempTheme);
    onClose();
  };

  /** MINI-SKELETONS FROM VERSION 1 */
  const renderHeroSkeleton = (id: string) => {
    return (
      <div className="w-full h-24 sm:h-24 rounded-md overflow-hidden bg-muted flex items-center justify-center relative">
        {/* Hero 1: Centered */}
        {id === "hero1" && (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-1.5 bg-primary/30 rounded"></div>
            <div className="w-9 h-9 rounded-full bg-primary/20"></div>
            <div className="w-20 h-2 bg-primary/20 rounded"></div>
          </div>
        )}

        {/* Hero 2: Left text + right image */}
        {id === "hero2" && (
          <div className="flex items-center justify-between w-full px-3">
            <div className="flex flex-col gap-2">
              <div className="w-20 h-2 bg-primary/30 rounded"></div>
              <div className="w-24 h-2 bg-primary/20 rounded"></div>
              <div className="w-14 h-2 bg-primary/10 rounded"></div>
            </div>
            <div className="w-12 h-14 bg-primary/20 rounded-lg" />
          </div>
        )}

        {/* Hero 3: Left text + right rings */}
        {id === "hero3" && (
          <div className="flex items-center justify-between w-full px-3">
            <div className="flex flex-col gap-2">
              <div className="w-20 h-2 bg-primary/30 rounded"></div>
              <div className="w-28 h-2 bg-primary/20 rounded"></div>
              <div className="w-20 h-2 bg-primary/10 rounded"></div>
            </div>

            <div className="relative w-12 h-12 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10"></div>

              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                <circle cx="50" cy="50" r="44" stroke="rgba(99,102,241,0.18)" strokeWidth="3" fill="transparent" />
                <circle cx="50" cy="50" r="30" stroke="rgba(99,102,241,0.1)" strokeWidth="2" fill="transparent" />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/30" />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div
        ref={modalRef}
        className="bg-card w-full max-w-xl rounded-lg shadow-xl border border-border p-6 animate-in fade-in"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Customize Layout</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* HERO LAYOUT SELECTOR */}
        <h3 className="text-sm font-medium mb-2">Choose Hero Layout</h3>

        <div className="grid grid-cols-3 gap-3">
          {["hero1", "hero2", "hero3"].map((hero) => (
            <button
              key={hero}
              onClick={() => setTempHero(hero)}
              className={`relative border rounded-lg p-2 transition-all text-left ${
                tempHero === hero
                  ? "ring-2 ring-primary shadow-md scale-[1.02]"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {renderHeroSkeleton(hero)}
              <p className="text-center text-xs mt-2">
                {hero.replace("hero", "Hero ")}
              </p>
            </button>
          ))}
        </div>

        {/* THEME SELECTOR */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Color Theme</h3>

          <div className="grid grid-cols-3 gap-3">
            {Object.entries(colorThemes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => setTempTheme(key as ColorTheme)}
                className={`flex items-center gap-2 p-2 border rounded-lg transition-all ${
                  tempTheme === key
                    ? "border-primary shadow-md scale-[1.02]"
                    : "border-border hover:bg-accent/10"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: `hsl(${theme.primary})` }}
                />
                <span className="text-sm">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-border hover:bg-accent/10"
          >
            Cancel
          </button>

          <button
            onClick={applyChanges}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSettingsModal;
