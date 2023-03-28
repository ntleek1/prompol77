import { SxProps, useTheme, alpha } from "@mui/material/styles";

function useCardStyles() {
  const theme = useTheme();

  const CSSCard: SxProps = {
    position: "relative",
    transition: "transform 0.2s, background-color 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: theme.palette.background.default,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  const CSSContent: SxProps = {};

  const CSSButtonGroup: SxProps = {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    gap: 1,
    boxShadow: "none",
  };

  return {
    CSSCard,

    CSSContent,
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
  };

  return {
    CSSCardHover,
  };
}

export { useCardStyles, useCardHoverStyles };
