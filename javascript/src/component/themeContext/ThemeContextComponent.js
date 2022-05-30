import React, { createContext } from "react";
import NavBar from "./NavBar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#FF0000",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext(themes.light);

export default function ThemeContextComponent() {
  return (
    <ThemeContext.Provider value={themes.light}>
      ThemeContext
      <button>Change theme</button>
      <NavBar />
    </ThemeContext.Provider>
  );
}
