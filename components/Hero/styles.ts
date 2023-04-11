import { SxProps, useTheme } from "@mui/material/styles";
function useHeroStyles() {
  const theme = useTheme();

  const heroCSS: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    minHeight: "calc(100vh - 80px - 32px)",
    justifyContent: "center",
    py: 6,
    color: theme.palette.common.white,
    backgroundImage: `url(/images/pictures.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box",
  };

  const heroContainerCSS = {
    height: "100%",
    "& > *": {
      height: "100%",
    },
  };

  const heroBenefitsCSS = {
    display: "flex",
    alignItems: "center",
    gap: 4,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    "> *": {
      display: "flex",
      gap: 2,
      alignItems: "center",
      minWidth: 200,
    },
  };

  const heroButtonsGroupCSS = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  };

  return {
    heroCSS,
    heroContainerCSS,
    heroBenefitsCSS,
    heroButtonsGroupCSS,
  };
}

export default useHeroStyles;
