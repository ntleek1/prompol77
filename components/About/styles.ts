import { SxProps, useTheme } from "@mui/material/styles";

function useAboutStyles() {
  const theme = useTheme();

  const CSSAbout: SxProps = {
    backgroundColor: theme.palette.grey[200],
    backgroundImage: `url(/bannerStripes.jpg)`,
    backgroundSize: "contain", // задать покрытие 50% по ширине и 100% по высоте
    backgroundRepeat: "no-repeat", // запретить повторение фона по вертикали
    backgroundPosition: "center bottom",
    py: theme.spacing(8),
  };

  const CSSAboutContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    pb: theme.spacing(4),
  };

  const CSSGridWrapper: SxProps = {
    position: "relative",
  };

  const CSSgridItemStyles: SxProps = {
    marginTop: 5,
    backgroundColor: "transparent",
  };

  const CSSgridItemStyles2: SxProps = {
    backgroundColor: "transparent",
  };

  const CSSHourglassBottomIconStyle: SxProps = {
    flexShrink: 0,
    width: "100px",
    textAlign: "start",
    fontSize: 42,
    mt: 2,
    color: "#EF4444",
  };

  const CSSVerifiedIconStyle: SxProps = {
    flexShrink: 0,
    width: "100px",
    textAlign: "start",
    fontSize: 42,
    mt: 2,
    color: "#84CC16",
  };

  const CSSPeopleAltSharpIconStyle: SxProps = {
    flexShrink: 0,
    width: "100px",
    textAlign: "start",
    fontSize: 42,
    mt: 2,
    color: "#244D94",
  };

  const CSSDescriptionIconStyle: SxProps = {
    flexShrink: 0,
    width: "100px",
    textAlign: "start",
    fontSize: 42,
    mt: 2,
    color: "#FBBF24",
  };

  const CSSCheckCircleOutlineIconStyle: SxProps = {
    width: "100px",
    fontSize: 32,
    color: "#16A34A",
    ml: -4.5,
  };

  const CSSHelpOutlineIconStyle: SxProps = {
    width: "100px",
    textAlign: "center",
    fontSize: 32,
    color: "#999999",
    ml: -4.5,
    mt: 2,
  };

  const CSSsmallBoxStyle: SxProps = {
    display: "flex",
    alignItems: "start",
    bgcolor: "white",
    p: 2,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
  };

  const CSSlargeBoxStyle: SxProps = {
    display: "flex",
    alignItems: "start",
    bgcolor: "white",
    p: 2,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    minHeight: 156,
  };

  const CSSreasonsStyle: SxProps = {
    display: "flex",
    alignItems: "center",
    zIndex: 3,
  };

  const CSStextreasonsStyle: SxProps = {
    marginTop: 2,
    textAlign: "justify",
    position: "relative", // устанавливаем позиционирование элемента
    zIndex: 3,
  };

  return {
    CSSAbout,
    CSSAboutContainer,
    CSSGridWrapper,
    CSSHourglassBottomIconStyle,
    CSSVerifiedIconStyle,
    CSSPeopleAltSharpIconStyle,
    CSSDescriptionIconStyle,
    CSSCheckCircleOutlineIconStyle,
    CSSHelpOutlineIconStyle,
    CSSsmallBoxStyle,
    CSSlargeBoxStyle,
    CSSgridItemStyles,
    CSSreasonsStyle,
    CSStextreasonsStyle,
    CSSgridItemStyles2,
  };
}

export default useAboutStyles;
