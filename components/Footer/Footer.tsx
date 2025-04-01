import React from "react";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import useFooterStyles from "./styles";

const Footer = () => {
  const { sxFooter } = useFooterStyles();
  return (
    <Box id="footer" sx={sxFooter}>
      <Container>
        <Box className="footer__Flexbox">
          <Typography className="footer__Copyright">
            &copy; Все права защищены, «Промпол77.РФ», {new Date().getFullYear()}
          </Typography>
          <Typography
            component={Link}
            href="/sitemap.xml"
            target="_blank"
            className="footer__Sitemap"
          >
            <AccountTreeIcon fontSize="small" />
            Карта сайта
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
