import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@/components/Card/CardHover";
import usePortfolio from "@/hooks/usePortfolio";
import { Button } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import usePortfolioStyles from "./styles";

const Portfolio = () => {
  const { title, subtitle, data } = usePortfolio();
  const { CSSPortfolio, CSSPortfolioContainer, CSSGridWrapper } =
    usePortfolioStyles();

  return (
    <Box id="portfolio" sx={CSSPortfolio}>
      <Container maxWidth="lg" sx={CSSPortfolioContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Box sx={CSSGridWrapper}>
          <Grid container spacing={2}>
            {data.map(({ title, description, link, imageSrc }, index) => (
              <Grid xs={12} sm={4} gap={1} key={index}>
                <Card
                  title={title}
                  description={description}
                  link={link}
                  imageSrc={imageSrc}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" startIcon={<ImageOutlinedIcon />}>
            Смотреть портфолио
          </Button>
        </Box>
      </Container>

      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h2">Клиенты которые нам доверяют</Typography>
        <Typography variant="body1">
          Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
          доверие.
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            height: 250,
            borderRadius: 8,
            mt: 8,
          }}
        >
          <img src="https://picsum.photos/id/238/100/100" alt="logo2" />
          <img src="https://picsum.photos/id/239/100/100" alt="logo3" />
          <img src="https://picsum.photos/id/240/100/100" alt="logo4" />
          <img src="https://picsum.photos/id/241/100/100" alt="logo5" />
          <img src="https://picsum.photos/id/242/100/100" alt="logo6" />
        </Box>
      </Container>
      <Container>
        <Box sx={{ textAlign: "left", marginTop: 2 }}>
          <Typography variant="body1">
            Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
            доверие.Мы ценим наши отношения с клиентами и всегда стараемся
            оправдать их доверие.Мы ценим наши отношения с клиентами и всегда
            стараемся оправдать их доверие.Мы ценим наши отношения с клиентами и
            всегда стараемся оправдать их доверие.Мы ценим наши отношения с
            клиентами и всегда стараемся оправдать их доверие.Мы ценим наши
            отношения с клиентами и всегда стараемся оправдать их доверие.Мы
            ценим наши отношения с клиентами и всегда стараемся оправдать их
            доверие.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
