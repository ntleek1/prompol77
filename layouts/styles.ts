import { Theme, useTheme, createStyles } from "@mui/material/styles";
import { APPBAR_HEIGHT } from "@/components/Header/styles";

const LayoutStyles = (theme: Theme) =>
  createStyles({
    sxAppBar: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      zIndex: theme.zIndex.appBar,
      boxShadow: theme.shadows[5],
    },
    sxAppSpace: {
      height: APPBAR_HEIGHT,
    },
  });

function useLayoutStyles() {
  const theme = useTheme();
  const styles = LayoutStyles(theme);

  return styles;
}

export default useLayoutStyles;
