import { Components, Theme } from "@mui/material/styles";

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: "none",
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        fontSize: "0.875rem",
        padding: "0.5rem 1rem",
      },
    },
    {
      props: { size: "medium" },
      style: {
        fontSize: "1rem",
        padding: "0.75rem 1.5rem",
      },
    },
    {
      props: { size: "large" },
      style: {
        fontSize: "1.25rem",
        padding: "0.75rem 2rem",
      },
    },
  ],
} as Components<Omit<Theme, "components">>["MuiButton"];
