import { SxProps, useTheme } from "@mui/material/styles";

function useContactsStyles() {
  const theme = useTheme();

  const ContactsCSS: SxProps = {
    py: theme.spacing(10),
    backgroundColor: theme.palette.grey[200],
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
  };

  const ContactsDataCSS: SxProps = {
    width: 180,
    display: "flex",
    flexDirection: "column",
    marginTop: 0.8,
    marginRight: 40,
  };

  return {
    ContactsCSS,
    ContactsBoxCSS,
    ContactsIconCSS,
    ContactsAccountTreeIconCSS,
    ContactsWatsAppCSS,
    ContactsLineBoxCSS,
    ContactsLineCSS,
    ContactsDataCSS,
  };
}

export default useContactsStyles;
