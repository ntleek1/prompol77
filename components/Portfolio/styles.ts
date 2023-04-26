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
        px: 4,
      },

      "& .portfolio-Container": {
        display: "flex",
        flexDirection: "column",
        gap: 3,

        "& .portfolio-Wrapper": {
          display: "flex",
          flexDirection: "column",
          gap: 4,
        },

        "& .portfolio-ClientBox": {
          backgroundColor: "white",
          boxShadow: theme.shadows[2],
          borderRadius: 8,
          overflow: "hidden",
          p: 4,
        },

        "& .porfolio-textList": {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          py: 3,
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            py: 1,
          },
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
