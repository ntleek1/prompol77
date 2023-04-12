import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import useHeaderStyles from "./styles";
import useIsMobile from "@/hooks/useIsMobile";

const Topbar = () => {
  const {
    CSSTopbar,
    CSSTopbarContainer,
    CSSTopbarSchedule,
    CSSTopbarPhoneLink,
    CSSTopbarMailLink,
    CSSTopbarWhatsAppIconStyle,
    CSSTopbarPhoneIconStyle,
    CSSTopbarMailIconStyle,
  } = useHeaderStyles();
  const isMobile = useIsMobile();

  return (
    <Box component="section" sx={CSSTopbar}>
      <Container sx={CSSTopbarContainer}>
        <Typography variant="small" sx={CSSTopbarSchedule}>
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <WhatsAppIcon sx={CSSTopbarWhatsAppIconStyle} />
          <Link
            href="https://api.whatsapp.com/send?phone=79857271414"
            target="_blank"
          >
            <Typography variant="small" color="grey">
              {isMobile ? "" : "Написать в"} WhatsApp
            </Typography>
          </Link>
          <MailIcon sx={CSSTopbarMailIconStyle} />
          <Link
            href="mailto:9857271414@mail.ru"
            variant="small"
            sx={CSSTopbarMailLink}
          >
            9857271414@mail.ru
          </Link>
          <PhoneIcon sx={CSSTopbarPhoneIconStyle} />
          <Link
            href="tel:+7 (985) 727-14-14"
            variant="small"
            sx={CSSTopbarPhoneLink}
          >
            +7 (985) 727-14-14
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
