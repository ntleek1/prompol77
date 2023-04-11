import { SxProps, useTheme } from "@mui/material/styles";

function usePortfolioStyles() {
  const theme = useTheme();

  const CSSPortfolio: SxProps = {
    backgroundColor: theme.palette.grey[200],
  };

  const CSSPortfolioClientBox: SxProps = {
    backgroundColor: "white",
    boxShadow: theme.shadows[2],
    borderRadius: 8,
    mt: 4,
    overflow: "hidden",
    p: 4,
  };

  const CSSPortfolioContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    py: theme.spacing(6),
  };

  const CSSGridWrapper: SxProps = {
    position: "relative",
  };

  return {
    CSSPortfolio,
    CSSPortfolioContainer,
    CSSGridWrapper,
    CSSPortfolioClientBox,
  };
}

export default usePortfolioStyles;
