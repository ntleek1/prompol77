import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import useIsMobile from "@/hooks/useIsMobile";
import useHeroStyles from "./styles";

const Hero = () => {
  const { sxHero } = useHeroStyles();
  const isMobile = useIsMobile();

  return (
    <Box id="heroScreen" component="section" sx={sxHero}>
      <Container maxWidth="md" className="hero__container">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={{ xs: 2, md: 4 }}
        >
          <Typography variant="h1" className="hero__headerText">
            Производство промышленных полов
          </Typography>

          <Typography variant="subtitle1" component="p" align="justify">
            Мы обладаем значительным опытом работы в данной сфере и точно знаем,
            чего ждет заказчик. Наши клиенты – это предприятия и общественные
            организации, которые ценят свое время и деньги.
          </Typography>

          <Box className="hero__benefits">
            <Box>
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h5" component="p" fontWeight={400}>
                  Гарантия
                </Typography>
                <Typography variant="h2" component="p">
                  от 2 лет
                </Typography>
              </Box>
            </Box>
            <Box>
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h5" component="p" fontWeight={400}>
                  Срок службы
                </Typography>
                <Typography variant="h2" component="p">
                  20+ лет
                </Typography>
              </Box>
            </Box>
            <Box>
              <VerifiedIcon color="success" fontSize="large" />
              <Box>
                <Typography variant="h5" component="p" fontWeight={400}>
                  Опыт работы
                </Typography>
                <Typography variant="h2" component="p">
                  20+ лет
                </Typography>
              </Box>
            </Box>
          </Box>

         {/* <Box className="hero__buttonsGroup">
             <Button
              href="#service"
              variant="contained"
              color="error"
              size={isMobile ? "medium" : "large"}
              startIcon={<PlaylistAddCheckOutlinedIcon />}
            >
              Выбрать вид полов
            </Button> */}
{/*             <Button
              href="#portfolio"
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              startIcon={<ImageOutlinedIcon />}
            >
              Смотреть готовые работы
            </Button>
          </Box> */}
        </Box>
      </Container>

      {!isMobile ? (
        <Box className="hero__scrollDown">
          <Link href="#service" scroll={false}>
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              color="inherit"
            >
              Прокрутите вниз для продолжения
            </Typography>
            <ArrowDownwardIcon fontSize="large" />
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default Hero;
