import React, { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#f4c2c2",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext(themes.light);

export default function ThemeContextComponent({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
