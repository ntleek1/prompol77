import { Components, Theme } from "@mui/material/styles";

export const MuiLink = {
  defaultProps: {
    underline: "none",
  },
  styleOverrides: {
    root: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
} as Components<Omit<Theme, "components">>["MuiLink"];
