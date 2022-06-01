import React, { createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light);

export default function index() {
  return (
    <div>
      <div>Change theme</div>
      <button>Change theme</button>
    </div>
  );
}
