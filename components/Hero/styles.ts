import { SxProps, useTheme } from "@mui/material/styles";

function useHeroStyles() {
  const theme = useTheme();

  const heroCSS: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    p: theme.spacing(4),
    paddingTop: theme.spacing(16),
    backgroundColor: theme.palette.grey[900],
    textAlign: "center",
  };

  return {
    heroCSS,
  };
}

export default useHeroStyles;
