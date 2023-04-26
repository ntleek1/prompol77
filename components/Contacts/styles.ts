import { useTheme, Theme, createStyles } from "@mui/material/styles";

const ContactsStyles = (theme: Theme) =>
  createStyles({
    sxContacts: {
      backgroundColor: theme.palette.grey[200],
      "& .contacts-Header": {
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
          pt: 2,
        },
      },
      "& .contacts-Box": {
        width: 205,
        display: "flex",
        flexDirection: "column",
      },
      "& .contacts-Icon": {
        marginRight: 1,
        fontSize: 23,
      },
      "& .contacts-WatsApp": {
        marginRight: 1,
        fontSize: 23,
        color: "green",
      },
      "& .contacts-AccountTreeIcon": {
        marginRight: 2,
        fontSize: 27,
        color: "#244D94",
      },
      "& .contacts-LineBox": {
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
      },
      "& .contacts-Line": {
        width: "100%",
        border: 0,
        borderBottom: "1px dashed #aaa",
        alignSelf: "end",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "& .contacts-Data": {
        width: 180,
        display: "flex",
        flexDirection: "column",
        marginTop: 0.8,
        marginRight: 40,
      },
      "& .contacts-FlexBox": {
        display: "flex",
        gap: 3,
        alignItems: "center",
        "& >*": {
          whiteSpace: "nowrap",
          width: 200,
          display: "flex",
          alignItems: "center",
          gap: 1,
        },
        "& hr": {
          flexGrow: 1,
          width: "auto",
        },
        [theme.breakpoints.down("md")]: {
          gap: 2,

          "> *": {
            width: "auto",
          },
        },
      },
    },
  });

function useContactsStyles() {
  const theme = useTheme();
  const styles = ContactsStyles(theme);

  return styles;
}

export default useContactsStyles;
