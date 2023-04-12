import { SxProps, useTheme } from "@mui/material/styles";

function useCallUsBannerStyles() {
  const theme = useTheme();

  const CallUsBannerCSS: SxProps = {
    py: theme.spacing(6),
    backgroundImage: `url(/images/banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box",
    minHeight: 480, // Установка высоты
  };

  const CallUsWrapperCSS = {
    display: "flex",
    gap: 3,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  };

  const CallUsBannerPhonesCSS = {
    background: theme.palette.background.default,
    borderRadius: 8,
    py: theme.spacing(2),
    px: theme.spacing(5),
    mt: 4,
    alignSelf: "center",
    [theme.breakpoints.down("lg")]: {
      alignSelf: "flex-start",
      mt: 0,
    },
    "> *": {
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "-200px",
        top: "25%",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "16px 200px 16px 0",
        borderColor: "transparent #ffffff transparent transparent",
        [theme.breakpoints.down("lg")]: {
          display: "none",
          content: "none",
        },
      },
    },
  };

  const CallUsBannerButtonCSS = {
    mt: 2,
    [theme.breakpoints.down("lg")]: {
      mt: 0,
    },
  };

  return {
    CallUsBannerCSS,
    CallUsWrapperCSS,
    CallUsBannerPhonesCSS,
    CallUsBannerButtonCSS,
  };
}

export default useCallUsBannerStyles;
