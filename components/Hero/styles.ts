import { SxProps, useTheme } from "@mui/material/styles";
function useHeroStyles() {
  const theme = useTheme();

  const heroCSS: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    height: "calc(100vh - 80px - 36px)",
    color: theme.palette.common.white,
    backgroundImage: `url(/pictures.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const heroContainerCSS = {
    height: "100%",
    "& > *": {
      height: "100%",
    },
  };

  return {
    heroCSS,
    heroContainerCSS,
  };
}

export default useHeroStyles;
