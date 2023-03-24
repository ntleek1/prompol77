import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Topbar = () => {
  return (
    <Box component="section" sx={{ bgcolor: "#DDDDDD", color: "#555555" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <Typography variant="body2">
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            href="#"
            underline="none"
            sx={{ mx: 2, color: "#555555", fontWeight: 500 }}
          >
            Написать в WhatsApp
          </Link>
          <Typography variant="body2" sx={{ mr: 2 }}>
            +7 (495) 664-34-68
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            +7 (495) 664-34-6
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
