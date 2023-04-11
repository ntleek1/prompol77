import { TypographyOptions } from "@mui/material/styles/createTypography";
import { DefaultTheme } from "../DefaultTheme";

export const DFontSize = 16;
export const DFontFamily = `"Inter", sans-serif`;

export const typography = {
  htmlFontSize: DFontSize,
  htmlFontFamily: DFontFamily,
  fontFamily: DFontFamily,
  fontSize: DFontSize,
  small: {
    fontFamily: DFontFamily,
    fontSize: DFontSize * 0.88,
    lineHeight: "1.25",
  },
  body1: {
    fontSize: DFontSize,
    fontWeight: 300,
    opacity: 0.8,
    [DefaultTheme.breakpoints.down("lg")]: {
      fontSize: DFontSize * 0.88,
    },
  },
  body2: {
    fontSize: DFontSize * 0.88,
    fontWeight: 400,
  },
  h1: {
    fontSize: DFontSize * 2.8,
    fontWeight: 700,
    [DefaultTheme.breakpoints.down("lg")]: {
      fontSize: DFontSize * 2,
    },
  },
  h2: {
    fontSize: DFontSize * 2.25,
    fontWeight: 700,
    [DefaultTheme.breakpoints.down("lg")]: {
      fontSize: DFontSize * 1.75,
    },
  },
  h3: {
    fontSize: DFontSize * 1.75,
    fontWeight: 700,
  },
  h4: {
    fontSize: DFontSize * 1.5,
    fontWeight: 700,
  },
  h5: {
    fontSize: DFontSize * 1.25,
    fontWeight: 700,
  },
  h6: {
    fontSize: DFontSize * 1.15,
    fontWeight: 700,
    [DefaultTheme.breakpoints.down("lg")]: {
      fontSize: DFontSize,
    },
  },
  subtitle1: {
    fontSize: DFontSize * 1.15,
    fontWeight: 400,
    [DefaultTheme.breakpoints.down("lg")]: {
      fontSize: DFontSize,
    },
  },
  subtitle2: {
    fontSize: DFontSize,
    fontWeight: 400,
  },
} as TypographyOptions;

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    small: true;
  }
}
