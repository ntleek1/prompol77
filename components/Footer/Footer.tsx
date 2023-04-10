import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          py: 8,
        }}
      >
        <Typography>&copy; ПОЛ77, 2023</Typography>
        <Box ml="auto">
          <a href="#" style={{ textDecoration: "none", color: "#365FA1" }}>
            <Typography display="flex" gap={1}>
              <AccountTreeIcon fontSize="small" />
              Карта сайта
            </Typography>
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
