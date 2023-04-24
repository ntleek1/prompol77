import { Components, Theme } from "@mui/material/styles";
import { typography } from "./typography";
import { DefaultTheme } from "../DefaultTheme";

export const MuiDialog = {
  styleOverrides: {
    paper: {
      padding: DefaultTheme.spacing(3),
    },
  },
} as Components<Omit<Theme, "components">>["MuiDialogContent"];

export const MuiDialogContentText = {
  styleOverrides: {
    root: typography.body2,
  },
} as Components<Omit<Theme, "components">>["MuiDialogContentText"];

export const MuiDialogActions = {
  styleOverrides: {
    root: {
      padding: DefaultTheme.spacing(3),
    },
  },
} as Components<Omit<Theme, "components">>["MuiDialogActions"];

export const MuiDialogTitle = {
  styleOverrides: {
    root: typography.h4,
  },
} as Components<Omit<Theme, "components">>["MuiDialogTitle"];
