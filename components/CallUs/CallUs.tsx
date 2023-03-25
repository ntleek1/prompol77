import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { CallUsCSS } from "./styles";

const CallUs = () => {
  return (
    <Box
      component="section"
      id="BannerBox"
      sx={{
        ...CallUsCSS,
        backgroundImage: `url(/banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box sx={{ position: "absolute", top: 350, right: 200 }}>
          <img src="/phone.png" alt="Your Image" />
          <Typography variant="h3" sx={{ mt: 0 }}>
            +7 (495) 664-34-68 <br /> +7 (495) 664-34-68
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ mt: 10 }}>
          Получите бесплатную <br /> консультацию
        </Typography>
        <Typography variant="h2" sx={{ mt: 4 }}>
          Консультация по выбору полов - бесплатно! <br /> Обращайтесь к нам за
          помощью в выборе <br /> наилучшего решения для вашего помещения.
        </Typography>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "515px",
            right: "450px",
            ml: "-50px",
            mb: "-30px",
          }}
        >
          Оставить заявку
        </Button>
      </Container>
    </Box>
  );
};

export default CallUs;
