import { Shadows } from "@mui/material";
import { DefaultTheme } from "../DefaultTheme";

export const customShadows = [
  "none",
  "0px 1px 4px rgba(0, 0, 0, 0.1)",
  "0px 4px 12px rgba(0, 0, 0, 0.1)",
  "0px 4px 24px rgba(0, 0, 0, 0.15)",
  "0px 4px 32px rgba(0, 0, 0, 0.24)",
  "0px 4px 60px rgba(0, 0, 0, 0.32)",
];

export const shadows = [
  ...customShadows,
  ...DefaultTheme.shadows.slice(customShadows.length),
] as Shadows;
