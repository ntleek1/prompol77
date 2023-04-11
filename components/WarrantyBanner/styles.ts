import { SxProps, useTheme } from "@mui/material/styles";

function useWarrantyBannerStyles() {
  const theme = useTheme();

  const WarrantyBannerCSS: SxProps = {
    py: theme.spacing(6),
    backgroundImage: `url(/images/warrantyBanner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box",
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
    [theme.breakpoints.down("lg")]: {
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
