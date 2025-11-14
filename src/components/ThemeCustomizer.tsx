// src/components/ThemeCustomizer.tsx
import React, { useEffect, useRef, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { createPortal } from "react-dom";
import { useTheme as useNextTheme } from "next-themes";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { colorThemes } from "@/data";
import type { ColorTheme } from "@/types";

const MENU_WIDTH = 192; // matches w-48 (48 * 4 = 192px) — keeps same size as before

const ThemeCustomizer: React.FC = () => {
  const { theme, setTheme } = useNextTheme();
  const { colorTheme, setColorTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onScrollOrResize() {
      // reposition on scroll/resize
      if (triggerRef.current) computePosition(triggerRef.current);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open]);

  useEffect(() => {
    // if menu open, compute pos
    if (open && triggerRef.current) computePosition(triggerRef.current);
  }, [open]);

  function computePosition(triggerEl: HTMLElement) {
    const rect = triggerEl.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    // align end: right edge of menu to right edge of trigger
    let left = rect.right - MENU_WIDTH;
    // clamp so menu stays in viewport
    if (left < 8) left = 8;
    if (left + MENU_WIDTH > viewportWidth - 8) left = viewportWidth - MENU_WIDTH - 8;

    const top = rect.bottom + 8 + window.scrollY; // small gap, use page coords
    const computed = {
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      width: `${MENU_WIDTH}px`,
      zIndex: 9999,
    } as React.CSSProperties;

    setMenuStyle(computed);
  }

  // Outside click handler
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      const trigger = triggerRef.current;
      // If click is inside trigger, ignore (toggle handled separately)
      if (trigger && trigger.contains(target)) return;

      // If click is inside menu, ignore
      const menu = document.getElementById("theme-customizer-portal");
      if (menu && menu.contains(target)) return;

      // otherwise close
      setOpen(false);
    }

    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // render portal content
  const menu = open ? createPortal(
    <div
      id="theme-customizer-portal"
      style={menuStyle}
      className="bg-card border border-border rounded-md shadow-lg p-2"
      // pointer events allowed inside portal
    >
      <div className="text-xs text-muted-foreground font-medium px-2 pb-2">Color Theme</div>
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
  ) : null;

  return (
    <div className="flex items-center gap-2" style={{ minWidth: 86 }}>
      {/* Dark/Light Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDarkMode}
        className="h-9 w-9 relative"
        aria-label="Toggle dark mode"
      >
        <span className="sr-only">Toggle dark mode</span>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      {/* Palette Trigger (wrapped in fixed-size box so header doesn't reflow) */}
      <div className="w-9 h-9 flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={(e) => {
            // toggle and compute position
            const newOpen = !open;
            setOpen(newOpen);
            if (!newOpen && triggerRef.current) {
              // closing; no extra work
              return;
            }
            // opening: compute after setOpen
            // we compute immediately for better UX
            const trg = triggerRef.current || (e.currentTarget as HTMLButtonElement);
            if (trg) computePosition(trg);
          }}
          ref={triggerRef}
        >
          <span className="sr-only">Select color theme</span>
          <Palette className="h-5 w-5" />
        </Button>
      </div>

      {menu}
    </div>
  );
};

export default ThemeCustomizer;
















// import { Moon, Sun, Palette } from "lucide-react";
// import { useTheme as useNextTheme } from "next-themes";
// import { Button } from "./ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { useTheme } from "../contexts/ThemeContext";
// import { colorThemes } from "@/data";
// import type { ColorTheme } from "@/types";

// const ThemeCustomizer = () => {
//   const { theme, setTheme } = useNextTheme();
//   const { colorTheme, setColorTheme } = useTheme();

//   const toggleDarkMode = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div className="flex items-center gap-2">
//       {/* Dark/Light Mode Toggle */}
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={toggleDarkMode}
//         className="h-9 w-9"
//         aria-label="Toggle dark mode"
//       >
//         <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//         <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       </Button>

//       {/* Color Theme Selector */}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Select color theme">
//             <Palette className="h-5 w-5" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-48">
//           <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           {Object.entries(colorThemes).map(([key, value]) => (
//             <DropdownMenuItem
//               key={key}
//               onClick={() => setColorTheme(key as ColorTheme)}
//               className="cursor-pointer"
//             >
//               <div className="flex items-center gap-3 w-full">
//                 <div
//                   className="w-4 h-4 rounded-full border border-border"
//                   style={{ backgroundColor: `hsl(${value.primary})` }}
//                 />
//                 <span className={colorTheme === key ? "font-semibold" : ""}>
//                   {value.name}
//                 </span>
//               </div>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };

// export default ThemeCustomizer;
