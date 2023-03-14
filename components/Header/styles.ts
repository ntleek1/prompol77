import { SxProps, useTheme } from "@mui/material/styles";

function useHeaderStyles() {
  const theme = useTheme();

  const CSSFixPosition = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
  };

  const CSSFlexbox = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
    height: "100%",
    "> div": {
      flexGrow: 1,
    },
  };

  const CSSTopbar: SxProps = {
    ...CSSFixPosition,
    height: theme.spacing(4),
    backgroundColor: theme.palette.grey[800],
  };

  const CSSNavbar: SxProps = {
    ...CSSFixPosition,
    top: theme.spacing(4),
    height: theme.spacing(8),
    backgroundColor: theme.palette.grey[600],
  };

  return {
    CSSFixPosition,
    CSSFlexbox,
    CSSTopbar,
    CSSNavbar,
  };
}

export default useHeaderStyles;
