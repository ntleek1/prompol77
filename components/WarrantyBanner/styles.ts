import { SxProps, useTheme } from "@mui/material/styles";

function useWarrantyBannerStyles() {
  const theme = useTheme();

  const WarrantyBannerCSS: SxProps = {
    py: theme.spacing(10),
    backgroundImage: `url(/warrantyBanner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 480, // Установка высоты
  };
  

  const WarrantyBannerHeaderCSS = {
    fontSize: 38,
    color: "black",
    textTransform: "uppercase",
    right: 0,
    textAlign: "center",
    top: 226, // Расстояние от верхнего края контейнера
    left: 200,
  };

  const WarrantyBannerBottomCSS = {
    color: "white",
    right: 0,
    textAlign: "center",
    borderColor: "white",
    width: 217,
    
  };

  

  return {
    WarrantyBannerCSS,
    WarrantyBannerHeaderCSS,
    WarrantyBannerBottomCSS
  };
}

export default useWarrantyBannerStyles;
