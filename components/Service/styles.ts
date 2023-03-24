import { SxProps, useTheme } from "@mui/material/styles";

function useServiceStyles() {
  const theme = useTheme();

  const CSSService: SxProps = {
    backgroundColor: theme.palette.grey[200],
  };

  const CSSServiceContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    py: theme.spacing(8),
  };

  const CSSGridWrapper: SxProps = {
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "-2rem",
      width: "6px",
      height: "100%",
      backgroundColor: theme.palette.error.main,
      borderRadius: theme.shape.borderRadius,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "-2rem",
      width: "6px",
      height: "100%",
      backgroundColor: theme.palette.info.main,
      borderRadius: theme.shape.borderRadius,
    },
  };

  return {
    CSSService,
    CSSServiceContainer,
    CSSGridWrapper,
  };
}

export default useServiceStyles;
