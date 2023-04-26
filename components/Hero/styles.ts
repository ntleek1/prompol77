import { Theme, useTheme, createStyles } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { APPBAR_HEIGHT } from "../Header/styles";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeroStyles = (theme: Theme) =>
  createStyles({
    sxHero: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      justifyContent: "space-evenly",
      color: theme.palette.common.white,
      backgroundImage: `url(/images/pictures.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxSizing: "border-box",
      minHeight: "580px",
      height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },

      "& .hero__container": {
        "& .hero__headerText": {
          textShadow: `0 4px 8px  ${theme.palette.text.primary}`,
        },

        "& .hero__buttonsGroup": {
          display: "flex",
          alignItems: "center",
          gap: 2,
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        },

        "& .hero__benefits": {
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexWrap: "wrap",
          gap: 4,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            gap: 2,
          },

          "> *": {
            display: "flex",
            gap: 2,
            alignItems: "center",
            minWidth: 200,
            [theme.breakpoints.down("md")]: {
              gap: 1,
              minWidth: 0,
              "& p": {
                fontSize: theme.typography.h5,
              },
              "&:first-child": {
                fontWeight: theme.typography.fontWeightRegular,
              },
              "& svg": {
                width: theme.spacing(4),
                height: theme.spacing(4),
              },
            },

            [theme.breakpoints.down(367)]: {
              minWidth: "65%",
            },
          },
        },
      },

      "& .hero__scrollDown": {
        py: theme.spacing(4),
        textAlign: "center",
        "& a": {
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          textShadow: `0px 2px 4px ${theme.palette.text.primary}`,
          svg: {
            animation: `${floatAnimation} 2s infinite ease-in-out`,
            filter: `drop-shadow(0px 3px 5px ${theme.palette.text.primary})`,
          },
        },
      },
    },
  });

function useHeroStyles() {
  const theme = useTheme();
  const styles = HeroStyles(theme);

  return styles;
}

export default useHeroStyles;
