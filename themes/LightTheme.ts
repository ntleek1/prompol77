import _ from "lodash";
import {
  createTheme,
  CSSInterpolation,
  SxProps,
  Theme,
} from "@mui/material/styles";
import { typography, MuiButton } from "./base";

const LightMuiButton = _.defaultsDeep({}, MuiButton);

export const LightTheme = createTheme({
  typography: {
    ...typography,
  },
  components: {
    MuiButton: LightMuiButton,
  },
});
