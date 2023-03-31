import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import useAboutStyles from "./styles";

const About = () => {
  const { CSSAbout, CSSAboutContainer, CSSGridWrapper } = useAboutStyles();

  return (
    <Box id="about" sx={CSSAbout}>
      <Container sx={CSSAboutContainer}>
        <Typography variant="h3" textAlign={"center"}>
          О компании POL77.ru
        </Typography>
        <Typography variant="body1" component="p" mt={3}>
          Наша компания - это профессиональная команда, специализирующаяся на
          создании надежных бетонных полов в помещениях с повышенными
          требованиями к износостойкости. Мы гарантируем высокое качество работ
          благодаря использованию передовых технологий и материалов, а также
          опыту и мастерству наших специалистов. При обращении к нам, вы
          получите не только безупречно выполненные работы, но и множество
          других преимуществ.
        </Typography>
      </Container>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    p: "2px 0",
                    borderRadius: 5,
                  }}
                >
                  <Icon>
                    <HourglassBottomIcon
                      sx={{ flexShrink: 0, width: "100px" }}
                    />
                  </Icon>

                  <Typography variant="subtitle2">
                    <Box component="span" fontWeight="bold" color="black">
                      Большой опыт.
                    </Box>
                    <br />
                    Команда профессионалов с опытом более 10 лет в устройстве
                    промышленных полов.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 5,
                  }}
                >
                  <Icon sx={{ fontSize: 32 }}>
                    <HourglassBottomIcon />
                  </Icon>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    Используем профессиональное оборудование, передовые
                    технологии и материалы, чтобы создавать долговечные
                    промышленные полы. Руководитель лично контролирует работу
                    наших сотрудников, чтобы каждый заказ был выполнен
                    безупречно.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 5,
                  }}
                >
                  <Icon sx={{ fontSize: 32 }}>
                    <HourglassBottomIcon />
                  </Icon>
                  <Typography variant="body1">
                    Соблюдаем сроки выполнения задач благодаря нашей большой
                    команде (~20 профессионалов).
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 5,
                  }}
                >
                  <Icon sx={{ fontSize: 32 }}>
                    <HourglassBottomIcon />
                  </Icon>
                  <Typography variant="body1">
                    Заключаем договор с каждым клиентом и подробно прописываем
                    условия нашей ответственности. Наша порядочность и честность
                    подтверждены уже реализованными проектами, и мы гарантируем,
                    что каждый заказ будет выполнен в полном соответствии с
                    заключенным договором.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Typography variant="h3" mt={5} textAlign={"center"}>
          Почему лучше нанимать фирму, а не бригаду?
        </Typography>
        <Typography variant="body1" component="p" mt={3}>
          В наше время, когда средства связи и коммуникаций очень
          распространены, заказчики имеют возможность напрямую обращаться к
          рабочим. И те будут рады по причине того, что заказчик разбирается в
          полах меньше чем контролирующий их бригадир и его можно обмануть. Не
          советуем идти таким путём по следующим причинам:
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
