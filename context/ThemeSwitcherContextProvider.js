"use client";

import { createContext, useState } from "react";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import muiTheme from "../config/theme/theme";
import palettes from "../config/theme/palettes";

export const ThemeSwitcherContext = createContext();

export const THEMES = {
  primary: "primary",
  secondary: "secondary",
};

function ThemeSwitcherContextProvider({ children }) {
  const defaultTheme = THEMES.primary;
  const [theme, setTheme] = useState(defaultTheme);
  const mergedTheme = createTheme({ ...muiTheme, palette: palettes[theme] });

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

export default ThemeSwitcherContextProvider;
