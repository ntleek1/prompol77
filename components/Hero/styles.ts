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
    justifyContent: "start",
    flexWrap: "wrap",
    gap: 4,
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      gap: 2,
    },
    "> *": {
      display: "flex",
      gap: 2,
      alignItems: "center",
      minWidth: 200,
      [theme.breakpoints.down("md")]: {
        gap: 1,
        minWidth: 0,
        "& p": {
          fontSize: theme.typography.h5,
          "&:first-child": {
            fontWeight: theme.typography.fontWeightRegular,
          },
        },
        "& svg": {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      },
      [theme.breakpoints.down(367)]: {
        minWidth: "65%",
      },
    },
  };

  const heroButtonsGroupCSS = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    [theme.breakpoints.down("md")]: {
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
