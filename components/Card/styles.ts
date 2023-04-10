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

  const CSSContent: SxProps = {};

  const CSSTitle: SxProps = {
    fontWeight: 400,
  };

  const CSSButtonGroup: SxProps = {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    gap: 1,
    boxShadow: "none",
    color: "white",
  };

  return {
    CSSCard,
    CSSContent,
    CSSTitle,
    CSSButtonGroup,
  };
}

interface CardHoverProps {
  title: string;
  description: string;
}

function useCardHoverStyles({ title, description }: CardHoverProps) {
  const theme = useTheme();

  const CSSCardHover: SxProps = {
    position: "relative",
    transition: "transform 0.2s, background-color 0.2s",
    boxShadow: theme.shadows[5],
  };

  return {
    CSSCardHover,
  };
}

export { useCardStyles, useCardHoverStyles };
