import { SxProps, useTheme } from "@mui/material/styles";

function useContactsStyles() {
  const theme = useTheme();

  const ContactsCSS: SxProps = {
    py: theme.spacing(10),
    backgroundColor: theme.palette.grey[200],
  };

  const ContactsHeaderCSS: SxProps = {
    mt: 3,
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  };

  const ContactsBoxCSS: SxProps = {
    width: 205,
    display: "flex",
    flexDirection: "column",
  };

  const ContactsIconCSS: SxProps = {
    marginRight: 1,
    fontSize: 23,
  };

  const ContactsWatsAppCSS: SxProps = {
    marginRight: 1,
    fontSize: 23,
    color: "green",
  };

  const ContactsAccountTreeIconCSS: SxProps = {
    marginRight: 2,
    fontSize: 27,
    color: "#244D94",
  };

  const ContactsLineBoxCSS: SxProps = {
    width: 100,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
  };

  const ContactsLineCSS: SxProps = {
    width: "100%",
    border: 0,
    borderBottom: "1px dashed #aaa",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };

  const ContactsDataCSS: SxProps = {
    width: 180,
    display: "flex",
    flexDirection: "column",
    marginTop: 0.8,
    marginRight: 40,
  };

  const ContactsFlexBoxCSS: SxProps = {
    display: "flex",
    gap: 3,
    py: 1,
    "> *": {
      width: 300,
      display: "flex",
      gap: 1,
    },
    hr: ContactsLineCSS,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      "> *": {
        width: "auto",
      },
    },
  };

  return {
    ContactsCSS,
    ContactsHeaderCSS,
    ContactsBoxCSS,
    ContactsIconCSS,
    ContactsAccountTreeIconCSS,
    ContactsWatsAppCSS,
    ContactsLineBoxCSS,
    ContactsLineCSS,
    ContactsDataCSS,
    ContactsFlexBoxCSS,
  };
}

export default useContactsStyles;
