import { APPBAR_HEIGHT } from "@/components/Header/styles";
import { DefaultTheme } from "../DefaultTheme";

export const globalStyles = {
  html: {
    scrollBehavior: "smooth",
    scrollPaddingTop: APPBAR_HEIGHT,
  },
  body: {
    maxWidth: "100vw",
    overflowX: "hidden",
    overflowY: "scroll !important",
    padding: "0 !important",
  },
  main: {
    minHeight: "100vh",
  },
  img: {
    maxWidth: "100%",
  },
  hr: {
    border: 0,
    borderBottom: "1px solid",
  },
  "ul, ol": {
    margin: 0,
    paddingLeft: "1.25rem",
  },
  ".float-left": {
    float: "left",
    marginRight: "3rem",
    marginBottom: "2rem",
  },
  ".float-right": {
    float: "right",
    marginLeft: "3rem",
    marginBottom: "2rem",
  },
  ".clearfix": {
    clear: "both",
  },
  a: {
    color: DefaultTheme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  article: {
    img: {
      borderRadius: "8px",
      boxShadow: DefaultTheme.shadows[10],
    },
    "h2, h3, h4, h5, h6": {
      paddingTop: "1rem",
      paddingBottom: ".5rem",
    },
    "&::after": {
      content: "''",
      clear: "both",
    },
  },
};
