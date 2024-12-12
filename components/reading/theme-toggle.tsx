"use client";

import { Moon, Sun, Sunset } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNightShift } from "../night-shift-overlay";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { isEnabled: isNightShift, opacity, setEnabled: setIsNightShift, setOpacity } = useNightShift();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <div className="p-2 flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="h-8 w-8 relative"
        >
          <div className="relative w-4 h-4">
            <Sun className={cn(
              "h-4 w-4 absolute transition-all duration-200",
              theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
              isNightShift && "text-muted-foreground"
            )} />
            <Moon className={cn(
              "h-4 w-4 absolute transition-all duration-200",
              theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
              isNightShift && "text-muted-foreground"
            )} />
          </div>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsNightShift(!isNightShift)}
          title="Night shift"
          className={cn(
            "h-8 w-8",
            isNightShift && "bg-yellow-100 hover:bg-yellow-200 border-yellow-200"
          )}
        >
          <Sunset className={cn(
            "h-4 w-4 transition-colors",
            isNightShift ? "text-yellow-700" : "text-orange-500"
          )} />
        </Button>
      </div>
      {isNightShift && (
        <div className="relative group">
          <div className="w-24">
            <input
              type="range"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full h-1.5 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-popover px-2 py-1 rounded shadow-sm">
            {opacity}%
          </div>
        </div>
      )}
    </div>
  );
}