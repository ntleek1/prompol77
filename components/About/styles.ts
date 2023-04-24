import { Theme, useTheme, createStyles } from "@mui/material/styles";

const AboutStyles = (theme: Theme) =>
  createStyles({
    sxAbout: {
      backgroundColor: theme.palette.grey[200],
      backgroundImage: `url(/images/bannerStripes.jpg)`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      py: theme.spacing(6),

      "& .about-Container": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        pb: theme.spacing(4),
      },
      "& .about-Wrapper": {
        position: "relative",
      },
      "& .about-GridItemStyles": {
        marginTop: 5,
        backgroundColor: "transparent",
      },
      "& .about-GridItemStyles2": {
        backgroundColor: "transparent",
      },

      "& .about-CheckCircleOutlineIconStyle": {
        width: "100px",
        fontSize: 32,
        color: "#16A34A",
        ml: -4.5,
      },
      "& .about-HelpOutlineIconStyle": {
        width: "100px",
        textAlign: "center",
        fontSize: 32,
        color: "#999999",
        ml: -4.5,
        mt: 2,
      },

      "& .about-SmallBoxStyle": {
        display: "flex",
        alignItems: "start",
        bgcolor: "white",
        p: 2,
        borderRadius: 5,
        boxShadow: theme.shadows[2],
        "& .about-HourglassBottomIconStyle": {
          flexShrink: 0,
          width: "100px",
          textAlign: "start",
          fontSize: 42,
          mt: 2,
          color: "#EF4444",
        },
        "& .about-PeopleAltSharpIconStyle": {
          flexShrink: 0,
          width: "100px",
          textAlign: "start",
          fontSize: 42,
          mt: 2,
          color: "#244D94",
        },
      },

      "& .about-LargeBoxStyle": {
        display: "flex",
        alignItems: "start",
        bgcolor: "white",
        p: 2,
        borderRadius: 5,
        boxShadow: theme.shadows[2],
        minHeight: 192,
        "& .about-VerifiedIconStyle": {
          flexShrink: 0,
          width: "100px",
          textAlign: "start",
          fontSize: 42,
          mt: 2,
          color: "#84CC16",
        },
        "& .about-DescriptionIconStyle": {
          flexShrink: 0,
          width: "100px",
          textAlign: "start",
          fontSize: 42,
          mt: 2,
          color: "#FBBF24",
        },
      },

      "& .about-ReasonsStyle": {
        display: "flex",
        alignItems: "center",
        zIndex: 3,
      },

      "& .about-TextreasonsStyle": {
        marginTop: 2,
        textAlign: "justify",
        position: "relative",
        zIndex: 3,
      },
    },
  });

function useAboutStyles() {
  const theme = useTheme();
  const styles = AboutStyles(theme);

  return styles;
}

export default useAboutStyles;
