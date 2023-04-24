import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useIsMobile from "@/hooks/useIsMobile";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useCallUsBannerStyles from "./styles";

const CallUsBanner = () => {
  const { sxCallUsBanner } = useCallUsBannerStyles();
  const isMobile = useIsMobile();

  return (
    <Box id="BannerBox" component="section" sx={sxCallUsBanner}>
      <Container>
        <Box className="callUsBanner__container">
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
              variant="subtitle2"
              align="justify"
              maxWidth="480px"
              component="p"
              pt={0}
            >
              Консультация по выбору полов - бесплатно! Обращайтесь к нам за
              помощью в выборе наилучшего решения для вашего помещения.
            </Typography>

            <Button
              className="callUsBanner-Button"
              variant="contained"
              startIcon={<EmailIcon />}
            >
              Оставить заявку
            </Button>

            <Box className="callUsBanner-Phones">
              <Box>
                <LocalPhoneIcon fontSize="medium" color="primary" />
                <Typography
                  href="tel:+79857271414"
                  variant="h5"
                  component={Link}
                  color="inherit"
                >
                  +7 (985) 727-14-14
                </Typography>
              </Box>
              <Box>
                <MailOutlineIcon fontSize="medium" color="primary" />
                <Typography
                  href="mailto:9857271414@mail.ru"
                  variant="h5"
                  component={Link}
                  color="inherit"
                >
                  9857271414@mail.ru
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
