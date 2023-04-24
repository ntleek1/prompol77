import { useTheme, createStyles, Theme } from "@mui/material/styles";

const ServiceStyles = (theme: Theme) =>
  createStyles({
    sxService: {
      py: 6,
      backgroundColor: theme.palette.grey[200],

      "& .service-Container": {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        pb: 4,

        "& .service-GridWrapper": {
          position: "relative",
          my: 4,

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

          [theme.breakpoints.down("md")]: {
            "&::before, &::after": {
              display: "none",
            },
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
