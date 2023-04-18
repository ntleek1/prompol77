import { useTheme, createStyles, Theme } from "@mui/material/styles";

const ServiceStyles = (theme: Theme) =>
  createStyles({
    sxService: {
      backgroundColor: theme.palette.grey[200],

      "& .service-Container": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(4),
        py: theme.spacing(6),

        "& .service-GridWrapper": {
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "-2rem",
            width: "6px",
            height: "100%",
            backgroundColor: theme.palette.error.main,
            borderRadius: theme.shape.borderRadius,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            top: "0",
            right: "-2rem",
            width: "6px",
            height: "100%",
            backgroundColor: theme.palette.info.main,
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  });

function useServiceStyles(): never {
  const theme = useTheme();
  const styles = ServiceStyles(theme);

  return styles;
}

export default useServiceStyles;
