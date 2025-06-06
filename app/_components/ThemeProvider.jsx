"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system");
  const [systemTheme, setSystemTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }

      // Detect system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setSystemTheme(mediaQuery.matches ? "dark" : "light");

      // Add listener for system preference changes
      const handleChange = (e) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const isDark =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      // Save user preference to localStorage (but not system preference)
      if (theme !== "system") {
        localStorage.setItem("theme", theme);
      } else {
        localStorage.removeItem("theme");
      }
    }
  }, [theme, systemTheme]);

  // Get the actual current theme (accounting for system preference)
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
