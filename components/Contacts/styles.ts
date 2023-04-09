import { SxProps, useTheme } from "@mui/material/styles";

function useContactsStyles() {
  const theme = useTheme();

  const ContactsCSS: SxProps = {
  py: theme.spacing(10),
  backgroundColor: theme.palette.grey[200],

  };


  const ContactsHeaderCSS = {
    fontSize: 38,
    color: "black",
    textTransform: "uppercase",
    
    textAlign: "left",
    top: 226, // Расстояние от верхнего края контейнера
    
    marginBottom: 5
  };

  return {
    ContactsCSS,
    
    ContactsHeaderCSS
  };
}

export default useContactsStyles;
