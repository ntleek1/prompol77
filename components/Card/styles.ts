import { SxProps, useTheme, alpha } from "@mui/material/styles";

function useCardStyles() {
  const theme = useTheme();

  const CSSCard: SxProps = {
    position: "relative",
    transition: "all 0.2s",
    boxShadow: "none",
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[5],
    },
  };

  const CSSMedia: SxProps = {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      position: "static",
    },
  };

  const CSSContent: SxProps = {
    [theme.breakpoints.down("md")]: {
      pb: theme.spacing(10) + " !important;",
    },
  };

  const CSSTitle: SxProps = {
    fontWeight: 400,
    wordBreak: "break-word",
    [theme.breakpoints.down("md")]: {
      fontWeight: 600,
    },
  };

  const CSSButtonGroup: SxProps = {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    gap: 1,
    boxShadow: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      color: "black",
      right: "auto",
      left: theme.spacing(2),
    },
  };

  return {
    CSSCard,
    CSSMedia,
    CSSContent,
    CSSTitle,
    CSSButtonGroup,
  };
}

function useCardHoverStyles() {
  const theme = useTheme();

  const CSSCardHover: SxProps = {
    position: "relative",
    transition: "transform 0.2s, background-color 0.2s",
    boxShadow: theme.shadows[2],
    wordWrap: "break-word",
  };

  const CSSCardHoverContent: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 1,
    position: "absolute",
    padding: theme.spacing(3) + " !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
    [theme.breakpoints.down("md")]: {
      position: "static",
      opacity: 1,
    },
  };

  return {
    CSSCardHover,
    CSSCardHoverContent,
  };
}

export { useCardStyles, useCardHoverStyles };
