import { SxProps } from "@mui/system";

const buttonStyles: SxProps = {
  backgroundColor: "#365FA1",
  color: "#fff",
  width: "250px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#365FA4",
    
  },
};


const CallUsCSS: SxProps = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  p: 4,
  height: "calc(100vh - 80px - 36px)",
  boxSizing: "border-box",
  backgroundColor: "#333",
  textAlign: "center",
  fontFamily: "Montserrat, sans-serif",
  h1: {
    fontSize: 38,
    color: "black",
    textTransform: "uppercase",
    right: 0,
    textAlign: "left",
    top: 226, // Расстояние от верхнего края контейнера
    left: 200,
  },
  h2: {
    position: "absolute",
    fontSize: 20,
    fontWeight: 400,
    color: "black",
    textAlign: "left",
    top: 81, // Расстояние от верхнего края контейнера
    right: 270,
  },
  h3: {
    position: "absolute",
    fontSize: 25,
    fontWeight: 400,
    color: "black",
    textAlign: "left",
    top: 30, // Расстояние от верхнего края контейнера
    right: 85,
  },
  button: buttonStyles,
};

export { CallUsCSS };
