import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useWarrantyBannerStyles from "./styles";

const WarrantyBanner = () => {
  const {
    WarrantyBannerCSS,
    WarrantyBannerContainerCSS,
    WarrantyBannerHeaderCSS,
    WarrantyBannerBottomCSS,
  } = useWarrantyBannerStyles();

  return (
    <Box component="section" id="BannerBox" sx={WarrantyBannerCSS}>
      <Container sx={{ height: "100%" }}>
        <Box sx={WarrantyBannerContainerCSS}>
          <Box>
            <Typography variant="h2" component="p" sx={WarrantyBannerHeaderCSS}>
              2 года гарантии качества
              <br /> и результата
            </Typography>
          </Box>
          <Box sx={WarrantyBannerBottomCSS}>
            <Button variant="contained" startIcon={<EmailIcon />}>
              Оставить заявку
            </Button>
            <Button variant="outlined" color="inherit">
              Подробнее
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default WarrantyBanner;
