import { Moon, Sun, Palette } from "lucide-react";
import { useTheme as useNextTheme } from "next-themes";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "../contexts/ThemeContext";
import { colorThemes } from "@/data";
import type { ColorTheme } from "@/types";

const ThemeCustomizer = () => {
  const { theme, setTheme } = useNextTheme();
  const { colorTheme, setColorTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Dark/Light Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDarkMode}
        className="h-9 w-9"
        aria-label="Toggle dark mode"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      {/* Color Theme Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Select color theme">
            <Palette className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(colorThemes).map(([key, value]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setColorTheme(key as ColorTheme)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3 w-full">
                <div
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: `hsl(${value.primary})` }}
                />
                <span className={colorTheme === key ? "font-semibold" : ""}>
                  {value.name}
                </span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeCustomizer;
