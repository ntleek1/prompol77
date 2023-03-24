import { SxProps, useTheme } from "@mui/material/styles";
function useHeroStyles() {
  const theme = useTheme();

  const heroCSS: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    p: theme.spacing(4),
    height: "calc(100vh - 80px - 36px)",
    boxSizing: "border-box",
    backgroundColor: theme.palette.grey[900],
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: 48,
      fontWeight: 700,
      color: theme.palette.common.white,
      textTransform: "uppercase",
      position: "absolute",
      top: 226, // Расстояние от верхнего края контейнера
      left: 200, // Расстояние от левого края контейнера
      textAlign: "left", // Выравнивание текста по левому краю
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      color: theme.palette.common.white,
      textTransform: "uppercase",
      textAlign: "left", // Выравнивание текста по левому краю
      position: "absolute", // Абсолютное позиционирование
      top: 400, // Расстояние от верхнего края контейнера (при необходимости измените значение)
      left: 200, // Расстояние от левого края контейнера (при необходимости измените значение)
    },
    buttonPrimary: {
      position: "absolute",
      top: 600, // Расстояние от верхнего края контейнера (измените, если требуется)
      left: 0, // Расстояние от левого края контейнера (измените, если требуется)
    },
    buttonSecondary: {
      top: 600, // Расстояние от верхнего края контейнера (измените, если требуется)
      left: "1000px", // Расстояние от левого края контейнера (измените, если требуется)
    },
  };

  return {
    heroCSS,
  };
}

export default useHeroStyles;
