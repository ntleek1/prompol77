import { SxProps, useTheme } from "@mui/material/styles";

function useAboutStyles() {
  const theme = useTheme();

  const CSSAbout: SxProps = {
    backgroundColor: theme.palette.grey[200],
  };

  const CSSAboutContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    py: theme.spacing(8),
  };

  const CSSGridWrapper: SxProps = {
    position: "relative",


  };

  return {
    CSSAbout, 
    CSSAboutContainer,
    CSSGridWrapper,
  };


}

export default useAboutStyles;
