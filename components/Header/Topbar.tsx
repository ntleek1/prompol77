import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import useHeaderStyles from "./styles";

const Topbar = () => {
  const {
    CSSTopbar,
    CSSTopbarContainer,

    CSSTopbarPhoneLink,
    CSSWhatsAppIconStyle,
    CSSPhoneIconStyle,
  } = useHeaderStyles();

  return (
    <Box component="section" sx={CSSTopbar}>
      <Container sx={CSSTopbarContainer}>
        <Typography variant="small" color="gray">
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <WhatsAppIcon sx={CSSWhatsAppIconStyle} />
          <Link
            href="https://api.whatsapp.com/send?phone=79265674901"
            target="_blank"
          >
            <Typography variant="small" color="grey">
              Написать в WhatsApp
            </Typography>
          </Link>
          <PhoneIcon sx={CSSPhoneIconStyle} />
          <Link href="tel:+749566403468" sx={CSSTopbarPhoneLink}>
            +7 (495) 664-34-68
          </Link>
          <Link href="tel:+749566403468" sx={CSSTopbarPhoneLink}>
            +7 (495) 664-34-68
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
