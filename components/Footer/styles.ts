import { useTheme, Theme, createStyles } from "@mui/material/styles";

const FooterStyles = (theme: Theme) =>
  createStyles({
    sxFooter: {
      backgroundColor: theme.palette.background.default,
      "& > *": {
        justifyContent: "space-between",
        display: "flex",
        py: 8,
      },
      a: {
        color: theme.palette.primary.main,
      },
    },
  });

function useFooterStyles() {
  const theme = useTheme();
  const styles = FooterStyles(theme);

  return styles;
}

export default useFooterStyles;
