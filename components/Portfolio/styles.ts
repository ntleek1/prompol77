import { useTheme, Theme, createStyles } from "@mui/material/styles";

const PortfolioStyles = (theme: Theme) =>
  createStyles({
    sxPortfolio: {
      backgroundColor: theme.palette.grey[200],

      "& .portfolio__ClientsHeader": {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 2,
        mt: 2,
        px: 4,
      },

      "& .portfolio-Container": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
        py: theme.spacing(6),

        "& .portfolio-Wrapper": {
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
          py: theme.spacing(6),
        },

        "& .portfolio-ClientBox": {
          backgroundColor: "white",
          boxShadow: theme.shadows[2],
          borderRadius: 8,
          overflow: "hidden",
          p: 4,
        },
      },
    },
  });

function usePortfolioStyles() {
  const theme = useTheme();
  const styles = PortfolioStyles(theme);

  return styles;
}

export default usePortfolioStyles;
