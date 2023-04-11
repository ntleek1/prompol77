import { SxProps, useTheme } from "@mui/material/styles";

function useHeaderStyles() {
  const theme = useTheme();

  const CSSFixPosition = {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
  };

  const CSSTopbar: SxProps = {
    ...CSSFixPosition,
    height: theme.spacing(4),
    backgroundColor: theme.palette.grey[800],
    bgcolor: "#DDDDDD",
    color: "#555555",
    [theme.breakpoints.down("lg")]: {
      "> *": {
        display: "none !important;",
      },
    },
  };

  const CSSTopbarContainer: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 0.75,
  };

  const CSSTopbarPhoneLink: SxProps = {
    fontWeight: 600,
    color: "black",
  };

  const CSSNavbar: SxProps = {
    ...CSSFixPosition,
    top: theme.spacing(4),
    height: theme.spacing(8),
    backgroundColor: theme.palette.grey[600],
  };

  const CSSNavbarStyle: SxProps = {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const CSSContainerStyle: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  };

  const CSSLogoStyle: SxProps = {
    position: "relative",
  };

  const CSSMenuStyle: SxProps = {
    display: "flex",
    gap: "40px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };

  const CSSButtonsStyle: SxProps = {
    display: "flex",
    gap: 1,
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };

  const CSSWhatsAppIconStyle: SxProps = {
    flexShrink: 0,
    fontSize: 16,
    color: "#4D7C0F",
    mr: -1.5,
  };

  const CSSPhoneIconStyle: SxProps = {
    flexShrink: 0,
    fontSize: 16,
    color: "#000000",
    mr: -1.5,
  };

  return {
    CSSTopbar,
    CSSTopbarContainer,

    CSSTopbarPhoneLink,
    CSSNavbar,
    CSSNavbarStyle,
    CSSContainerStyle,
    CSSLogoStyle,
    CSSMenuStyle,
    CSSButtonsStyle,
    CSSWhatsAppIconStyle,
    CSSPhoneIconStyle,
  };
}

export default useHeaderStyles;
