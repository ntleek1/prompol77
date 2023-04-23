import { useTheme, Theme, createStyles } from "@mui/material/styles";

const FooterStyles = (theme: Theme) =>
  createStyles({
    sxFooter: {
      backgroundColor: theme.palette.background.default,
      ".footer__Flexbox": {
        justifyContent: "space-between",
        display: "flex",
        py: 8,
      },
      ".footer__Sitemap": {
        display: "flex",
        gap: 1,
        color: "inherit",
        opacity: 0.8,
      },
    },
  });

function useFooterStyles() {
  const theme = useTheme();
  const styles = FooterStyles(theme);

  return styles;
}

export default useFooterStyles;
