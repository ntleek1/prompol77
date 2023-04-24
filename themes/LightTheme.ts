import _ from "lodash";
import { createTheme } from "@mui/material/styles";
import {
  MuiButton,
  MuiLink,
  MuiDialog,
  MuiDialogContentText,
  MuiDialogTitle,
  MuiDialogActions,
  globalStyles,
  palette,
  shadows,
  typography,
} from "./base";

const LightMuiButton = _.defaultsDeep({}, MuiButton);
const LightMuiLink = _.defaultsDeep({}, MuiLink);
const LightMuiDialog = _.defaultsDeep({}, MuiDialog);
const LightMuiDialogContentText = _.defaultsDeep({}, MuiDialogContentText);
const LightMuiDialogTitle = _.defaultsDeep({}, MuiDialogTitle);
const LightMuiDialogActions = _.defaultsDeep({}, MuiDialogActions);

export const LightTheme = createTheme({
  typography: {
    ...typography,
  },
  palette,
  shadows,
  components: {
    MuiButton: LightMuiButton,
    MuiLink: LightMuiLink,
    MuiDialog: LightMuiDialog,
    MuiDialogContentText: LightMuiDialogContentText,
    MuiDialogTitle: LightMuiDialogTitle,
    MuiDialogActions: LightMuiDialogActions,
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ...globalStyles,
        body: {
          ...globalStyles.body,
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
