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
        <Typography>&copy; ПОЛ77, 2023</Typography>
        <Box>
          <Link href="#">
            <Typography display="flex" gap={1}>
              <AccountTreeIcon fontSize="small" />
              Карта сайта
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
