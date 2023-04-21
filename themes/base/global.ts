import { DefaultTheme } from "../DefaultTheme";

export const globalStyles = {
  body: {
    maxWidth: "100vw",
    overflowX: "hidden",
    scrollBehavior: "smooth",
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
