import { Palette } from "@mui/material";
import { DefaultTheme } from "../DefaultTheme";

export const override = {
  secondary: {
    light: "#cccccc",
    main: "#777777",
    dark: "#555555",
    contrastText: "#ffffff",
  },
};

export const custom = {};

export const palette = {
  ...DefaultTheme.palette,
  ...override,
  custom,
} as Palette;
