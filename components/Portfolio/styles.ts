import { SxProps, useTheme } from "@mui/material/styles";


function usePortfolioStyles() {
  const theme = useTheme();

  const CSSPortfolio: SxProps = {
    backgroundColor: theme.palette.grey[200],
  };

  const CSSPortfolioClientBox: SxProps = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    mt: 8,
    overflow: "hidden",
    gap: 5,
    p: 3,
  };

  const CSSPortfolioContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    py: theme.spacing(8),
  };

  const CSSGridWrapper: SxProps = {
    position: "relative",


  };

  return {
    CSSPortfolio,
    CSSPortfolioContainer,
    CSSGridWrapper,
    CSSPortfolioClientBox
  };
  
  
  
  

}

export default usePortfolioStyles;
