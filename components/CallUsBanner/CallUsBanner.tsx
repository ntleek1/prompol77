import React from "react";
import { Box, Container, Typography, Button, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useIsMobile from "@/hooks/useIsMobile";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useCallUsBannerStyles from "./styles";

const CallUsBanner = () => {
  const { sxCallUsBanner } = useCallUsBannerStyles();
  const isMobile = useIsMobile();

  return (
    <Box component="section" id="BannerBox" sx={sxCallUsBanner}>
      <Container>
        <Box className="callusbanner__container">
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
              className="CallUsBanner-Button"
              variant="contained"
              startIcon={<EmailIcon />}
            >
              Оставить заявку
            </Button>

            <Box className="CallUsBanner-Phones">
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <LocalPhoneIcon fontSize="medium" color="primary" />
                  <Link href="tel:+79857271414" color="inherit">
                    <Typography variant="h5" component="p">
                      +7 (985) 727-14-14
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    mt: 1,
                  }}
                >
                  <MailOutlineIcon fontSize="medium" color="primary" />
                  <Link href="mailto:9857271414@mail.ru" color="inherit">
                    <Typography variant="h5" component="p">
                      9857271414@mail.ru
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallUsBanner;
