"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch issue
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
