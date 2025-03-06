import React from "react";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useCallUsBannerStyles from "./styles";
import Order from "../Order/Order";

const CallUsBanner = () => {
  const { sxCallUsBanner } = useCallUsBannerStyles();
  const isMobile = useIsMobile();

  return (
    <Box id="BannerBox" component="section" sx={sxCallUsBanner}>
      <Container>
        <Box className="callUsBanner__Container">
          <Box flex={1}>
            <Typography
              variant="h2"
              component="p"
              align={isMobile ? "left" : "right"}
            >
              Получите бесплатную <br /> консультацию
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={4}
            alignItems="baseline"
          >
            <Typography
              className="callUsBanner__Description"
              variant="subtitle2"
              component="p"
            >
              Консультация по выбору полов - бесплатно! Обращайтесь к нам за
              помощью в выборе наилучшего решения для вашего помещения.
            </Typography>

            <Box className="callUsBanner-Button">
              <Order />
            </Box>

            <Box className="callUsBanner-Phones">
              <Box>
                <LocalPhoneIcon fontSize="medium" color="primary" />
                <Typography
                  href="tel:+79775002266"
                  variant="h5"
                  component={Link}
                  color="inherit"
                >
                  +7 (977) 500-22-66
                </Typography>
              </Box>
              <Box>
                <MailOutlineIcon fontSize="medium" color="primary" />
                <Typography
                  href="mailto:9775002266@mail.ru"
                  variant="h5"
                  component={Link}
                  color="inherit"
                >
                  9775002266@mail.ru
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallUsBanner;
