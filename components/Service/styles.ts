import { styled } from "@mui/material/styles";

export const ServiceFlex = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#EEEEEE",
});

export const ServiceGrid = styled("div")({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  padding: "1rem",
  backgroundColor: "#EEEEEE",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "5px",
    width: "6px",
    height: "100%",
    backgroundColor: "red",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "0",
    right: "3px", // изменено свойство left на right
    width: "5px",
    height: "100%",
    backgroundColor: "blue",
  },
});
