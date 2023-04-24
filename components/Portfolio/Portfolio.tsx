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
import Link from "next/link";
import Routes from "@/routes";

interface PortfolioProps {
  headerVariant?: "h1" | "h2" | "h3";
  limit?: number;
}

const Portfolio: React.FC<PortfolioProps> = ({
  headerVariant = "h2",
  limit,
}) => {
  const isMobile = useIsMobile();
  const { header, description, data, clientsData } = usePortfolio({ limit });
  const { sxPortfolio } = usePortfolioStyles();

  return (
    <Box id="portfolio" component="section" sx={sxPortfolio}>
      <Container maxWidth="lg" className="portfolio-Container">
        <Typography variant={headerVariant}>{header}</Typography>
        <Typography variant="body2">{description}</Typography>
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
        {limit !== undefined ? (
          <Box textAlign="center">
            <Link href={Routes.Portfolio} passHref>
              <Button
                color="error"
                variant="contained"
                startIcon={<ImageOutlinedIcon />}
              >
                Смотреть все работы
              </Button>
            </Link>
          </Box>
        ) : null}
      </Container>

      <Box className="portfolio__ClientsHeader">
        <Typography variant="h3">Клиенты которые нам доверяют</Typography>
        <Typography variant="body2" component="p">
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
        <Box display="flex" flexDirection="column" gap={2} pt={4}>
          <Typography component="p" align="justify">
            Промышленные полы в современном мире являются одними из самых важных
            элементов любого производственного и коммерческого помещения. Они
            обеспечивают не только эстетическую функцию, но и являются основой
            для безопасной работы и эффективного использования пространства
          </Typography>
          <Typography component="p" align="justify">
            В настоящее время устройство промышленных полов достигло невероятных
            высот благодаря инновационным технологиям и материалам, которые
            обеспечивают высокую прочность, износостойкость, устойчивость к
            химическим веществам и температурным перепадам, а также
            антистатические и антибактериальные свойства.
          </Typography>
          <Typography component="p" align="justify">
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
