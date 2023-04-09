import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useWarrantyBannerStyles from "./styles";

const WarrantyBanner = () => {
  const {
    WarrantyBannerCSS,
    WarrantyBannerHeaderCSS,
    WarrantyBannerBottomCSS,
  } = useWarrantyBannerStyles();

  return (
    <Box component="section" id="BannerBox" sx={WarrantyBannerCSS}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box>
            <Typography variant="h2" component="p" sx={WarrantyBannerHeaderCSS}>
              2 года гарантии качества
              <br /> и результата
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gap={4}
            alignItems="center"
            marginTop={45}
          >
            <Button variant="contained" startIcon={<EmailIcon />}>
              Оставить заявку
            </Button>
            <Button variant="outlined" sx={WarrantyBannerBottomCSS}>
              Подробнее
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default WarrantyBanner;
