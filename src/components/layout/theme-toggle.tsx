"use client";

import { useTheme } from "next-themes";
import { useCallback, useState } from "react";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const [animating, setAnimating] = useState(false);

  const handleToggle = useCallback(() => {
    setAnimating(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setAnimating(false), 600);
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <button
        className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-border"
        aria-label="Toggle theme"
      >
        <span className="text-lg">🌙</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-border"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className={`text-lg ${animating ? "animate-spin-toggle" : ""}`}>
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
