"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react"; 

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Use resolvedTheme for hydration-safe theme detection
  const currentTheme = resolvedTheme;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-200" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800" />
      )}
    </Button>
  );
}
