import _ from "lodash";
import { createTheme } from "@mui/material/styles";
import { globalStyles, typography, MuiButton, MuiLink, shadows } from "./base";

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
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ...globalStyles,
        body: {
          backgroundColor: "#eee",
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          "blockquote& p": theme.typography.body2,
        }),
      },
    },
  },
});
