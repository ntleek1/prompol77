import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import useHeaderStyles from "./styles";
import useIsMobile from "@/hooks/useIsMobile";

const Topbar = () => {
  const { sxTopbar } = useHeaderStyles();
  const isMobile = useIsMobile();

  const topbarRef = useRef(null);

  useEffect(() => {
    if (
      topbarRef.current &&
      !topbarRef.current.classList.contains("topbar__container_loaded")
    ) {
      topbarRef.current.classList.add("topbar__container_loaded");
    }
  }, [topbarRef]);

  return (
    <Box sx={sxTopbar}>
      <Container ref={topbarRef} className="topbar__container">
        <Typography variant="small" className="topbar__schedule">
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box className="topbar__phones">
          <WhatsAppIcon className="topbar__whatsAppIcon" />
          <Link
            href="https://api.whatsapp.com/send?phone=79775002266"
            target="_blank"
            className="topbar__whatsAppLink"
          >
            <Typography variant="small">
              {isMobile ? "" : "Написать в"} WhatsApp
            </Typography>
          </Link>
          <MailIcon className="topbar__mailIcon" />
          <Typography
            component={Link}
            href="mailto:9775002266@mail.ru"
            variant="small"
            className="topbar__mailLink"
          >
            Email
          </Typography>
          <PhoneIcon className="topbar__phoneIcon" />
          <Typography
            component={Link}
            href="tel:+79775002266"
            variant="small"
            className="topbar__phoneLink"
          >
            +7 (977) 500-22-66
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
