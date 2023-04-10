import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CardHover from "@/components/Card/CardHover";
import usePortfolio from "@/hooks/usePortfolio";
import { Button } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import usePortfolioStyles from "./styles";

const Portfolio = () => {
  const { title, subtitle, data } = usePortfolio();
  const {
    CSSPortfolio,
    CSSPortfolioContainer,
    CSSGridWrapper,
    CSSPortfolioClientBox,
  } = usePortfolioStyles();

  return (
    <Box id="portfolio" sx={CSSPortfolio}>
      <Container maxWidth="lg" sx={CSSPortfolioContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Box sx={CSSGridWrapper}>
          <Grid container spacing={2}>
            {data.map(
              ({ title, description, link, imageSrc, type, square }, index) => (
                <Grid xs={12} sm={4} gap={1} key={index}>
                  <CardHover
                    title={title}
                    description={description}
                    link={link}
                    imageSrc={imageSrc}
                    type={type}
                    square={square}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" startIcon={<ImageOutlinedIcon />}>
            Смотреть портфолио
          </Button>
        </Box>
      </Container>

      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h3">Клиенты которые нам доверяют</Typography>
        <Typography variant="body1" component="p" mt={2}>
          Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
          доверие.
        </Typography>
      </Box>
      <Container>
        <Box sx={CSSPortfolioClientBox}>
          <img src="./images/clients/danon.png" />
          <img src="./images/clients/altair.png" />
          <img src="./images/clients/spar.jpg" />
          <img src="./images/clients/mig.png" />
          <img src="./images/clients/mgu.jpg" />
          <img src="./images/clients/micic.png" />
          <img src="./images/clients/myaso.png" />
          <img src="./images/clients/lebed.png" />
          <img src="./images/clients/voenka.jpg" />
          <img src="./images/clients/skolkovo.png" />
          <img src="./images/clients/rpkb.jpg" />
          <img src="./images/clients/korolev.webp" />
          <img src="./images/clients/macdac.jpg" />
          <img src="./images/clients/nike.jpg" />
          <img src="./images/clients/rpkb.jpg" />
          <img src="./images/clients/rgok.png" />
          <img src="./images/clients/radio.png" />
        </Box>
      </Container>
      <Container>
        <Box display="flex" flexDirection="column" gap={2} pt={8}>
          <Typography variant="body1" component="p">
            Промышленные полы в современном мире являются одними из самых важных
            элементов любого производственного и коммерческого помещения. Они
            обеспечивают не только эстетическую функцию, но и являются основой
            для безопасной работы и эффективного использования пространства
          </Typography>
          <Typography variant="body1" component="p">
            В настоящее время устройство промышленных полов достигло невероятных
            высот благодаря инновационным технологиям и материалам, которые
            обеспечивают высокую прочность, износостойкость, устойчивость к
            химическим веществам и температурным перепадам, а также
            антистатические и антибактериальные свойства.
          </Typography>
          <Typography variant="body1" component="p">
            Мы внимательно следим за всеми новинками и тенденциями в отрасли,
            постоянно совершенствуем свои знания и умения, чтобы предложить
            нашим клиентам самые передовые решения для устройства промышленных
            полов. Мы дорожим качеством и надежностью нашей работы, и всегда
            гарантируем безупречный результат. Благодаря нашим услугам вы
            получите промышленный пол, который прослужит долгие годы и прекрасно
            справится со всеми задачами, которые перед ним стоят.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
