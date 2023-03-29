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
  const { CSSPortfolio, CSSPortfolioContainer, CSSGridWrapper } =
    usePortfolioStyles();

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
        <Typography variant="h2">Клиенты которые нам доверяют</Typography>
        <Typography variant="body1" component="p" mt={3}>
          Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
          доверие.
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 8,
            mt: 8,
            overflow: "hidden",
          }}
        >
          <img src="./images/clients/danon.png" />
          <img src="./images/clients/altair.png" />
          <img src="./images/clients/korolev.webp" />
          <img src="./images/clients/myaso.png" />
          <img src="./images/clients/mgu.jpg" />
          <img src="./images/clients/micic.png" />
          <img src="./images/clients/mig.png" />
          <img src="./images/clients/lebed.png" />
          <img src="./images/clients/nike.png" />
          <img src="./images/clients/skolkovo.png" />
          <img src="./images/clients/rpkb.jpg" />
          <img src="./images/clients/spar.jpg" />
          <img src="./images/clients/voenka.jpg" />
          <img src="./images/clients/macdac.jpg" />
        </Box>
      </Container>
      <Container>
        <Box sx={{ textAlign: "left", marginTop: 2 }}>
          <Typography variant="body1" component="p" mt={5}>
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
