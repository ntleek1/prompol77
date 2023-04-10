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

  const WarrantyBannerContainerCSS = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  };

  const WarrantyBannerHeaderCSS = {
    textAlign: "center",
  };

  const WarrantyBannerBottomCSS = {
    display: "flex",
    gap: 2,
    alignSelf: "bottom",
    mt: "auto",
    color: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  };

  return {
    WarrantyBannerCSS,
    WarrantyBannerContainerCSS,
    WarrantyBannerHeaderCSS,
    WarrantyBannerBottomCSS,
  };
}

export default useWarrantyBannerStyles;
