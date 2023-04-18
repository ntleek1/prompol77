import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useWarrantyBannerStyles from "./styles";

const WarrantyBanner = () => {
  const { sxWarrantyBanner } = useWarrantyBannerStyles();

  return (
    <Box component="section" id="BannerBox" sx={sxWarrantyBanner}>
      <Container sx={{ height: "100%" }}>
        <Box className="warrantyBanner-Container">
          <Box>
            <Typography
              variant="h2"
              component="p"
              className="warrantyBanner-Header">
              2 года гарантии качества
              <br /> и результата
            </Typography>
          </Box>
          <Box className="warrantyBanner-Bottom">
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
