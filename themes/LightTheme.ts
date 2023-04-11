import _ from "lodash";
import { createTheme } from "@mui/material/styles";
import { typography, MuiButton, MuiLink, shadows } from "./base";

const LightMuiButton = _.defaultsDeep({}, MuiButton);
const LightMuiLink = _.defaultsDeep({}, MuiLink);

export const LightTheme = createTheme({
  typography: {
    ...typography,
  },
  shadows,
  components: {
    MuiButton: LightMuiButton,
    MuiLink: LightMuiLink,
  },
});
