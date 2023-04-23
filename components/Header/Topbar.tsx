import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import useHeaderStyles from "./styles";
import useIsMobile from "@/hooks/useIsMobile";

const Topbar = () => {
  const { sxTopbar } = useHeaderStyles();
  const isMobile = useIsMobile();

  return (
    <Box sx={sxTopbar}>
      <Container className="topbar__container">
        <Typography variant="small" className="topbar__schedule">
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <WhatsAppIcon className="topbar__whatsAppIcon" />
          <Link
            href="https://api.whatsapp.com/send?phone=79857271414"
            target="_blank"
            className="topbar__whatsAppLink"
          >
            <Typography variant="small">
              {isMobile ? "" : "Написать в"} WhatsApp
            </Typography>
          </Link>
          <MailIcon className="topbar__mailIcon" />
          <Link
            href="mailto:9857271414@mail.ru"
            variant="small"
            className="topbar__mailLink"
          >
            9857271414@mail.ru
          </Link>
          <PhoneIcon className="topbar__phoneIcon" />
          <Link
            href="tel:+7 (985) 727-14-14"
            variant="small"
            className="topbar__phoneLink"
          >
            +7 (985) 727-14-14
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
