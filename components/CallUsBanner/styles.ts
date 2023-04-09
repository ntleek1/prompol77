import { SxProps, useTheme } from "@mui/material/styles";

function useCallUsStyles() {
  const theme = useTheme();

  const CallUsCSS: SxProps = {
    py: theme.spacing(10),
    backgroundImage: `url(/Banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 480, // Установка высоты
  };
  

  const CallUsHeaderCSS = {
    fontSize: 38,
    color: "black",
    textTransform: "uppercase",
    right: 0,
    textAlign: "left",
    top: 226, // Расстояние от верхнего края контейнера
    left: 200,
  };

  const CallUsPhonesCSS = {
    background: theme.palette.background.default,
    borderRadius: 8,
    py: theme.spacing(2),
    px: theme.spacing(6),
    mt: 5,
    "> *": {
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "-247px",
        top: "25%",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "16px 200px 16px 0",
        borderColor: "transparent #ffffff transparent transparent",
      },
    },
  };

  return {
    CallUsCSS,
    CallUsHeaderCSS,
    CallUsPhonesCSS,
  };
}

export default useCallUsStyles;
