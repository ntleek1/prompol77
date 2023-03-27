import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import useHeroStyles from "./styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

const Hero = () => {
  const { heroCSS } = useHeroStyles();

  const IconWithText = ({ icon, text }) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Box>{text}</Box>
      </Box>
    );
  };

  const onButtonClick1 = () => {
    // код обработчика нажатия кнопки
  };

  const onButtonClick2 = () => {
    // код обработчика нажатия кнопки
  };

  return (
    <Box
      component="section"
      id="heroScreen"
      sx={{
        ...heroCSS,
        backgroundImage: `url(/pictures.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Typography variant="h1" sx={{ mt: 10 }}>
          Производство <br /> промышленных полов
        </Typography>
        <Typography variant="h2" sx={{ mt: 4 }}>
          Мы обладаем значительным опытом работы в данной сфере и точно знаем,
          чего <br /> ждет заказчик. Наши клиенты – это предприятия и
          общественные организации, <br /> которые ценят свое время и деньги.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 4,
            pt: 49, // отступ сверху
            pl: 0, // отступ слева
            color: "white",
            gap: 10,
            marginLeft: "-120px", // отрицательный отступ слева
            justifyContent: "flex-start", // align items to the left
          }}
        >
          <IconWithText
            icon={<VerifiedIcon sx={{ color: "green" }} />}
            text={<Typography variant="body1">Гарантия от 2 лет</Typography>}
          />
          <IconWithText
            icon={<VerifiedIcon sx={{ color: "green" }} />}
            text={<Typography variant="body1">Срок службы 20+ лет</Typography>}
          />
          <IconWithText
            icon={<VerifiedIcon sx={{ color: "green" }} />}
            text={<Typography variant="body1">Опыт работы 8+ лет</Typography>}
          />
        </Box>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ position: "absolute", bottom: 200, left: 200 }}
        >
          <Button
            sx={{ backgroundColor: "#EF4444", color: "white", mr: 1 }}
            startIcon={<PlaylistAddCheckOutlinedIcon />}
          >
            Выбрать вид полов
          </Button>
          <Button
            sx={{ backgroundColor: "#365FA1", color: "white" }}
            startIcon={<ImageOutlinedIcon />}
          >
            Смотреть готовые работы
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Hero;
