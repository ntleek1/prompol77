import { useTheme, createStyles, Theme } from "@mui/material/styles";

export const APPBAR_HEIGHT = 112;

const headerStyles = (theme: Theme) =>
  createStyles({
    sxTopbar: {
      position: "relative",
      height: theme.spacing(4),
      backgroundColor: theme.palette.grey[300],
      whiteSpace: "nowrap",
      "& .topbar__container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 0.75,
        "& .topbar__schedule": {
          color: "grey",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        },
        "& .topbar__phones": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          [theme.breakpoints.down("md")]: {
            flex: 1,
          },
          "& .topbar__whatsAppLink": {
            fontWeight: 400,
            color: "grey",
          },
          "& .topbar__phoneLink": {
            fontWeight: 600,
            color: "black",
          },
          "& .topbar__mailLink": {
            fontWeight: 400,
            color: "grey",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          },
          "& .topbar__whatsAppIcon": {
            flexShrink: 0,
            fontSize: 16,
            color: "#4D7C0F",
            mr: -1.5,
          },
          "& .topbar__phoneIcon": {
            flexShrink: 0,
            fontSize: 16,
            color: "black",
            mr: -1.5,
            [theme.breakpoints.down("md")]: {
              ml: "auto",
            },
          },
          "& .topbar__mailIcon": {
            flexShrink: 0,
            fontSize: 16,
            color: "grey",
            mr: -1.5,
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          },
        },
      },
    },
    sxNavbar: {
      position: "relative",
      height: theme.spacing(10),
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .navbar__container": {
        display: "flex",
        gap: 4,
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        "& .navbar__logo": {
          position: "relative",
          flexShrink: 0,
        },
        "& .navbar__burger": {
          ml: "auto",
          mr: 1,
          color: "inherit",
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "flex",
          },
        },
        "& .navbar__menu": {
          ml: "auto",
          display: "flex",
          gap: 4,
          alignItems: "center",
          "& .navbar__navigation": {
            display: "flex",
            gap: theme.spacing(4),
            whiteSpace: "nowrap",
            "& a": {
              color: "black",
              fontWeight: 600,
            },
          },
          "& .navbar__buttonGroup": {
            display: "flex",
            gap: 1,
          },
          [theme.breakpoints.down("md")]: {
            display: "none",
            position: "fixed",
            left: 0,
            right: 0,
            top: APPBAR_HEIGHT,
            py: 4,
            backgroundColor: theme.palette.background.default,
            flexDirection: "column",
            textAlign: "center",
            boxShadow: theme.shadows[5],
            textTransform: "uppercase",
            "& > *": {
              flexDirection: "column",
            },
            "&.navbar__menu_visible": {
              display: "flex",
            },
          },
        },
      },
    },
  });

function useHeaderStyles() {
  const theme = useTheme();
  const styles = headerStyles(theme);

  return styles;
}

export default useHeaderStyles;
