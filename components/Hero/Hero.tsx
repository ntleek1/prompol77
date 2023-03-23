import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import useHeroStyles from "./styles";
import ButtonGroup from "@mui/material/ButtonGroup";

const Hero = () => {
  const { heroCSS } = useHeroStyles();

  const IconWithText = ({ image, text }) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={image} alt="Icon" style={{ width: "24px", height: "24px" }} />
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
        backgroundSize: "100% 100%",
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
            justifyContent: "flex-start",
            alignItems: "center",
            p: 2,
            pt: 49, // отступ сверху
            pl: 13, // отступ слева
            color: "white",
            gap: 10,
          }}
        >
          <IconWithText
            image="/icon.png"
            text={<Typography variant="body1">Гарантия от 2 лет</Typography>}
          />
          <IconWithText
            image="/icon.png"
            text={<Typography variant="body1">Срок службы 20+ лет</Typography>}
          />
          <IconWithText
            image="/icon.png"
            text={<Typography variant="body1">Опыт работы 8+ лет</Typography>}
          />
        </Box>

        <ButtonGroup
          variant="contained"
          fullWidth
          sx={{
            position: "absolute",
            top: 650,
            left: 200,
            gap: "10px",
            boxShadow: "none",
          }}
        >
          <Button
            onClick={onButtonClick1}
            sx={{
              backgroundColor: "#EF4444",
              borderColor: "white",
              borderWidth: "1px",

              color: "white",
              width: 210,
              height: 50,
              borderradius: 4,
            }}
          >
            Выбрать вид полов
          </Button>
          <Button
            onClick={onButtonClick2}
            sx={{
              backgroundColor: "#365FA1",
              borderColor: "white",
              borderWidth: "1px",

              color: "white",
              borderradius: 4,
              width: 270,
              height: 50,
            }}
          >
            Смотреть готовые работы
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Hero;
