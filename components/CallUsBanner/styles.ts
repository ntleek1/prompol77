import { SxProps, useTheme } from "@mui/material/styles";

function useCallUsBannerStyles() {
  const theme = useTheme();

  const CallUsBannerCSS: SxProps = {
    py: theme.spacing(10),
    backgroundImage: `url(/banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 480, // Установка высоты
  };

  const CallUsBannerHeaderCSS = {
    fontSize: 38,
    color: "black",
    right: 0,
    textAlign: "left",
  };

  const CallUsBannerPhonesCSS = {
    background: theme.palette.background.default,
    borderRadius: 8,
    py: theme.spacing(4),
    px: theme.spacing(8),
    mt: 5,
    "> *": {
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "-237px",
        top: "2%",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "16px 200px 16px 0",
        borderColor: "transparent #ffffff transparent transparent",
      },
    },
  };

  return {
    CallUsBannerCSS,
    CallUsBannerHeaderCSS,
    CallUsBannerPhonesCSS,
  };
}

export default useCallUsBannerStyles;
