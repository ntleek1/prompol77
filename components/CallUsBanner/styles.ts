import { SxProps, useTheme } from "@mui/material/styles";

function useCallUsBannerStyles() {
  const theme = useTheme();

  const CallUsBannerCSS: SxProps = {
    py: theme.spacing(10),
    backgroundImage: `url(/banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 480, // Установка высоты
  };

  const CallUsWrapperCSS = {
    display: "flex",
    gap: 2,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
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
    [theme.breakpoints.down("md")]: {
      mt: 0,
    },
  };

  const CallUsBannerButtonCSS = {
    mt: 8,
    [theme.breakpoints.down("md")]: {
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
