import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <Box component="section" sx={{ bgcolor: "#DDDDDD", color: "#555555" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 0.75,
        }}
      >
        <Typography variant="small" color="gray">
          г. Москва, Пн-Пт с 09:00 до 19:00, Сб-Вс выходные
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link href="#" variant="small" color="gray">
            Написать в WhatsApp
          </Link>
          <Link
            href="tel:+749566403468"
            variant="body1"
            fontWeight={600}
            color="black"
          >
            +7 (495) 664-34-68
          </Link>
          <Link
            href="tel:+749566403468"
            variant="body1"
            fontWeight={600}
            color="black"
          >
            +7 (495) 664-34-68
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
