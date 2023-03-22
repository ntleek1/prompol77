import { styled } from "@mui/material/styles";

export const ServiceGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  padding: "2rem",
  
  backgroundColor: "#EEEEEE", // добавлено свойство backgroundColor
});

export const ServiceFlex = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxShadow: "none",
  padding: "1rem", // добавлено свойство padding
  
  backgroundColor: "#EEEEEE", // добавлено свойство backgroundColor
});
