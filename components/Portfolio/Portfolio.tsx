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
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const Portfolio = () => {
  const isMobile = useIsMobile();
  const { title, subtitle, data, clientsData } = usePortfolio();
  const { sxPortfolio } = usePortfolioStyles();

  return (
    <Box id="portfolio" sx={sxPortfolio}>
      <Container maxWidth="lg" className="portfolio-Container">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Box className="portfolio-Wrapper">
          <Grid container spacing={2}>
            {data.map(
              ({ title, description, imageSrc, type, square }, index) => (
                <Grid xs={6} sm={4} gap={1} key={index}>
                  <CardHover
                    title={title}
                    description={description}
                    // link={link}
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

      <Box sx={{ textAlign: "center", mt: 2, px: 4 }}>
        <Typography variant="h3">Клиенты которые нам доверяют</Typography>
        <Typography variant="body1" component="p" mt={2}>
          Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
          доверие.
        </Typography>
      </Box>
      <Container className="portfolio-Container">
        <Box className="portfolio-ClientBox">
          <Grid
            container
            spacing={2}
            alignContent="center"
            justifyContent="center"
          >
            {clientsData.map(({ src, alt }, index) => (
              <Grid xs={4} lg={2} gap={1} key={index}>
                <Box
                  width="100%"
                  height={isMobile ? 72 : 120}
                  position="relative"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box display="flex" flexDirection="column" gap={2} pt={8}>
          <Typography variant="body1" component="p" align="justify">
            Промышленные полы в современном мире являются одними из самых важных
            элементов любого производственного и коммерческого помещения. Они
            обеспечивают не только эстетическую функцию, но и являются основой
            для безопасной работы и эффективного использования пространства
          </Typography>
          <Typography variant="body1" component="p" align="justify">
            В настоящее время устройство промышленных полов достигло невероятных
            высот благодаря инновационным технологиям и материалам, которые
            обеспечивают высокую прочность, износостойкость, устойчивость к
            химическим веществам и температурным перепадам, а также
            антистатические и антибактериальные свойства.
          </Typography>
          <Typography variant="body1" component="p" align="justify">
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
