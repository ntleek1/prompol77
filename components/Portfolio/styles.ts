import { SxProps, useTheme } from "@mui/material/styles";


function usePortfolioStyles() {
  const theme = useTheme();

  const CSSPortfolio: SxProps = {
    backgroundColor: theme.palette.grey[200],
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
  };
  
  
  
  

}

export default usePortfolioStyles;
