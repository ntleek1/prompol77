import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function useIsMobile() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return isMobile;
}

export default useIsMobile;
