import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
  const { sxAbout } = useAboutStyles();

  return (
    <Box id="about" component="section" sx={sxAbout}>
      <Container>
        <Box className="about-headerContainer">
          <Typography variant="h2" textAlign={"center"}>
            О компании
          </Typography>
          <Typography variant="body2" mt={3}>
Наша компания более 20 лет занимается профессиональным производством промышленных полов различных видов и направленности. Если у Вас существует техническое задание &ndash; мы выполним его строго по прописанным в нём пунктам. Если его нет &ndash; поможем составить, подобрать лучшие для его выполнения материалы.        </Box>

        <Grid container spacing={{ xs: 1, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box className="about-SmallBoxStyle">
              <HourglassBottomIcon className="about-HourglassBottomIconStyle" />
              <Box>
                <Typography
                  component="p"
                  fontWeight="bold"
                  color="black"
                  mb={1}
                >
                  Большой опыт.
                </Typography>
                <Typography component="p" variant="body1">
                  Команда профессионалов с опытом более 10 лет в устройстве
                  промышленных полов.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="about-SmallBoxStyle">
              <PeopleAltSharpIcon className="about-PeopleAltSharpIconStyle" />
              <Box>
                <Typography
                  component="p"
                  fontWeight="bold"
                  color="black"
                  mb={1}
                >
                  Большой рабочий потенциал.
                </Typography>
                <Typography component="p" variant="body1">
                  Соблюдаем сроки выполнения задач благодаря нашей большой
                  команде (~20 профессионалов).
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="about-LargeBoxStyle">
              <VerifiedIcon className="about-VerifiedIconStyle" />
              <Box>
                <Typography
                  component="p"
                  fontWeight="bold"
                  color="black"
                  mb={1}
                >
                  Высокое качество.
                </Typography>
                <Typography component="p" variant="body1">
                  Используем профессиональное оборудование, передовые технологии
                  и материалы, чтобы создавать долговечные промышленные полы.
                  Руководитель лично контролирует работу наших сотрудников,
                  чтобы каждый заказ был выполнен безупречно.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="about-LargeBoxStyle">
              <DescriptionIcon className="about-DescriptionIconStyle" />
              <Box>
                <Typography
                  component="p"
                  fontWeight="bold"
                  color="black"
                  mb={1}
                >
                  Работаем по договору.
                </Typography>
                <Typography component="p" variant="body1">
                  Заключаем договор с каждым клиентом и подробно прописываем
                  условия нашей ответственности. Наша порядочность и честность
                  подтверждены уже реализованными проектами, и мы гарантируем,
                  что каждый заказ будет выполнен в полном соответствии с
                  заключенным договором.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h3" className="about-subHeaderContainer">
          Почему лучше нанимать фирму, а не бригаду?
        </Typography>
        <Typography variant="body2" component="p" mt={4}>
          В наше время, когда средства связи и коммуникаций очень
          распространены, заказчики имеют возможность напрямую обращаться к
          рабочим. И те будут рады по причине того, что заказчик разбирается в
          полах меньше чем контролирующий их бригадир и его можно обмануть. Не
          советуем идти таким путём по следующим причинам:
        </Typography>

        <Grid container spacing={{ xs: 3, md: 6 }} py={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box className="about-ReasonsStyle">
                <Circle color="primary">
                  <Typography variant="h2" component="span">
                    1
                  </Typography>
                </Circle>

                <Typography variant="h3" ml={2}>
                  Сложность работ
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon className="about-CheckCircleOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Профессиональные сотрудники с опытом работ.
                  </span>
                </Typography>
              </Box>
              <Box className="about-ReasonsStyle">
                <HelpOutlineIcon className="about-HelpOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Неизвестный уровень качества работ.
                  </span>
                </Typography>
              </Box>
              <Typography variant="body1" className="about-TextreasonsStyle">
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
          <Grid item xs={12} md={6}>
            <Box>
              <Box className="about-ReasonsStyle">
                <Circle color="error">
                  <Typography variant="h2" component="span">
                    2
                  </Typography>
                </Circle>

                <Typography variant="h3" ml={2}>
                  Гарантия
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon className="about-CheckCircleOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Реальная гарантия на несколько лет.
                  </span>
                </Typography>
              </Box>
              <Box className="about-ReasonsStyle">
                <HelpOutlineIcon className="about-HelpOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Отсутствие реальной гарантии.
                  </span>
                </Typography>
              </Box>
              <Typography variant="body1" className="about-TextreasonsStyle">
                Гарантии могут быть словесные, Вам могут пообещать разного. В
                итоге оформить договор на фирму какого-нибудь своего друга или
                вообще однодневку. В случае предъявления Вами весьма вероятных
                претензий – предъявить их будет некому.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box className="about-ReasonsStyle">
                <Circle color="error">
                  <Typography variant="h2" component="span">
                    3
                  </Typography>
                </Circle>

                <Typography variant="h3" ml={2}>
                  Контроль работ
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon className="about-CheckCircleOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Строгий контроль на всех этапах работ.
                  </span>
                </Typography>
              </Box>
              <Box className="about-ReasonsStyle">
                <HelpOutlineIcon className="about-HelpOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Отсутствие строгого контроля.
                  </span>
                </Typography>
              </Box>
              <Typography variant="body1" className="about-TextreasonsStyle">
                Отсутствие должного контроля. Как было написано выше – Вас могут
                просто обмануть, как лиц слабо разбирающихся в процессе. Нужно
                им это будет с одной целью – им так дешевле. Претензий Вам потом
                будет предъявить некому.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box className="about-ReasonsStyle">
                <Circle color="primary">
                  <Typography variant="h2" component="span">
                    4
                  </Typography>
                </Circle>

                <Typography variant="h3" ml={2}>
                  Прозрачность
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CheckCircleOutlineIcon className="about-CheckCircleOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3 }}>
                  <span style={{ color: "#16A34A", fontWeight: "bold" }}>
                    Компания:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Чистая (Белая) бухгалтерия.
                  </span>
                </Typography>
              </Box>
              <Box className="about-ReasonsStyle">
                <HelpOutlineIcon className="about-HelpOutlineIconStyle" />
                <Typography variant="subtitle2" sx={{ marginLeft: -3, mt: 2 }}>
                  <span style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                    Бригада:
                  </span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Неизвестная фирма или фирма-однодневка.
                  </span>
                </Typography>
              </Box>
              <Typography variant="body1" className="about-TextreasonsStyle">
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
