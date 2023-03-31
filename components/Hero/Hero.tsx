import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import useHeroStyles from "./styles";

const Hero = () => {
  const { heroCSS, heroContainerCSS } = useHeroStyles();

  return (
    <Box component="section" id="heroScreen" sx={heroCSS}>
      <Container maxWidth="md" sx={heroContainerCSS}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={4}
        >
          <Typography variant="h1">Производство промышленных полов</Typography>

          <Typography variant="subtitle1">
            Мы обладаем значительным опытом работы в данной сфере и точно знаем,
            чего ждет заказчик. Наши клиенты – это предприятия и общественные
            организации, которые ценят свое время и деньги.
          </Typography>

          <Box display="flex" alignItems="center" gap={4}>
            <Box display="flex" gap={2} alignItems="center">
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h4" component="p" fontWeight={400}>
                  Гарантия
                </Typography>
                <Typography variant="h2" component="p">
                  от 2 лет
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={2} alignItems="center">
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h4" component="p" fontWeight={400}>
                  Срок службы
                </Typography>
                <Typography variant="h2" component="p">
                  20+ лет
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={2} alignItems="center">
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h4" component="p" fontWeight={400}>
                  Опыт работы
                </Typography>
                <Typography variant="h2" component="p">
                  8+ лет
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="contained"
              color="error"
              size="large"
              startIcon={<PlaylistAddCheckOutlinedIcon />}
            >
              Выбрать вид полов
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ImageOutlinedIcon />}
            >
              Смотреть готовые работы
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
