import { useTheme, createStyles, Theme } from "@mui/material/styles";

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
    sxNavbar: {
      position: "relative",
      height: theme.spacing(10),
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .navbar__container": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        "& .navbar__logo": {
          position: "relative",
          flexShrink: 0,
        },
        "& .navbar__menu": {
          display: "flex",
          gap: theme.spacing(4),
          whiteSpace: "nowrap",
          "& a": {
            color: "black",
            fontWeight: 600,
          },
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        },
        "& .navbar__buttonGroup": {
          display: "flex",
          gap: 1,
          [theme.breakpoints.down("lg")]: {
            display: "none",
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
