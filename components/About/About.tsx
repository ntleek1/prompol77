import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Circle from "./Circle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useAboutStyles from "./styles";

const About = () => {
  const {
    CSSAbout,
    CSSAboutContainer,
    CSSHourglassBottomIconStyle,
    CSSVerifiedIconStyle,
    CSSPeopleAltSharpIconStyle,
    CSSDescriptionIconStyle,
    CSSCheckCircleOutlineIconStyle,
    CSSHelpOutlineIconStyle,
    CSSsmallBoxStyle,
    CSSlargeBoxStyle,
    CSSgridItemStyles,
    CSSreasonsStyle,
    CSStextreasonsStyle,
  } = useAboutStyles();

  return (
    <Box id="about" sx={CSSAbout}>
      <Container sx={CSSAboutContainer}>
        <Typography variant="h3" textAlign={"center"}>
          О компании POL77.ru
        </Typography>
        <Typography variant="body1" mt={3}>
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
                <Box className="small-box" sx={CSSsmallBoxStyle}>
                  <HourglassBottomIcon sx={CSSHourglassBottomIconStyle} />
                  <Typography variant="body1">
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
                <Box className="large-box" sx={CSSlargeBoxStyle}>
                  <VerifiedIcon sx={CSSVerifiedIconStyle} />
                  <Typography variant="body1">
                    <Box component="span" fontWeight="bold" color="black">
                      Высокое качество.
                    </Box>
                    <br />
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
                <Box className="small-box" sx={CSSsmallBoxStyle}>
                  <PeopleAltSharpIcon sx={CSSPeopleAltSharpIconStyle} />
                  <Typography variant="body1">
                    <Box component="span" fontWeight="bold" color="black">
                      Большой рабочий потенциал.
                    </Box>
                    <br />
                    Соблюдаем сроки выполнения задач благодаря нашей большой
                    команде (~20 профессионалов).
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="large-box" sx={CSSlargeBoxStyle}>
                  <DescriptionIcon sx={CSSDescriptionIconStyle} />
                  <Typography variant="body1">
                    <Box component="span" fontWeight="bold" color="black">
                      Работаем по договору.
                    </Box>
                    <br />
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

      <Container>
        <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
          <Grid item xs={12} md={6} sx={CSSgridItemStyles}>
            <Box>
              <Box sx={CSSreasonsStyle}>
                <Circle color="primary">
                  <Typography variant="h2" component="span">
                    1
                  </Typography>
                </Circle>

                <Typography
                  variant="h3"
                  sx={{
                    marginLeft: 3,
                  }}
                >
                  Сложность работ
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon sx={CSSCheckCircleOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Профессиональные сотрудники с опытом работ.
                  </span>
                </Typography>
              </Box>
              <Box sx={CSSreasonsStyle}>
                <HelpOutlineIcon sx={CSSHelpOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Неизвестный уровень качества работ.
                  </span>
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={CSStextreasonsStyle}>
                Промышленные полы вещь сложная. И дефекты от работы рабочих без
                контроля скажутся спустя время. Так например, некоторые
                заказчики топпиновых полов, нанявших в итоге бригаду, не могли
                ответить пользуются ли рабочие кюрингом (это лак, который не
                даёт влаге испарится из топпинга в течении суток, то необходимо
                чтобы не возникали микротрещины). Если его не будет – пол начнёт
                постепенно разрушаться. И разрушаться по всей площади. Сколько
                будет стоить демонтаж (за Ваш счёт) этого пола и устройство
                нового – предположите сами. В случае с полимерными полами –
                ситуация её сложнее.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={CSSgridItemStyles}>
            <Box>
              <Box sx={CSSreasonsStyle}>
                <Circle color="error">
                  <Typography variant="h2" component="span">
                    2
                  </Typography>
                </Circle>

                <Typography
                  variant="h3"
                  sx={{
                    marginLeft: 3,
                  }}
                >
                  Гарантия
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon sx={CSSCheckCircleOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Реальная гарантия на несколько лет.
                  </span>
                </Typography>
              </Box>
              <Box sx={CSSreasonsStyle}>
                <HelpOutlineIcon sx={CSSHelpOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Отсутствие реальной гарантии.
                  </span>
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={CSStextreasonsStyle}>
                Гарантии могут быть словесные, Вам могут пообещать разного. В
                итоге оформить договор на фирму какого-нибудь своего друга или
                вообще однодневку. В случае предъявления Вами весьма вероятных
                претензий – предъявить их будет некому.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={CSSgridItemStyles}>
            <Box>
              <Box sx={CSSreasonsStyle}>
                <Circle color="error">
                  <Typography variant="h2" component="span">
                    3
                  </Typography>
                </Circle>

                <Typography
                  variant="h3"
                  sx={{
                    marginLeft: 3,
                  }}
                >
                  Контроль работ
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon sx={CSSCheckCircleOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Строгий контроль на всех этапах работ.
                  </span>
                </Typography>
              </Box>
              <Box sx={CSSreasonsStyle}>
                <HelpOutlineIcon sx={CSSHelpOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Отсутствие строгого контроля.
                  </span>
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={CSStextreasonsStyle}>
                Отсутствие должного контроля. Как было написано выше – Вас могут
                просто обмануть, как лиц слабо разбирающихся в процессе. Нужно
                им это будет с одной целью – им так дешевле. Претензий Вам потом
                будет предъявить некому.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={CSSgridItemStyles}>
            <Box>
              <Box sx={CSSreasonsStyle}>
                <Circle color="primary">
                  <Typography variant="h2" component="span">
                    4
                  </Typography>
                </Circle>

                <Typography
                  variant="h3"
                  sx={{
                    marginLeft: 3,
                  }}
                >
                  Прозрачность
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon sx={CSSCheckCircleOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Чистая (Белая) бухгалтерия.
                  </span>
                </Typography>
              </Box>
              <Box sx={CSSreasonsStyle}>
                <HelpOutlineIcon sx={CSSHelpOutlineIconStyle} />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Неизвестная фирма или фирма-однодневка.
                  </span>
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={CSStextreasonsStyle}>
                Весьма вероятно, что договор будет не от чистой фирмы и в
                результате этого Вы получите проблемы с Налоговой Полицией.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
