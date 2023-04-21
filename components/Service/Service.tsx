import React from "react";
import { Routes, generateHref } from "@/routes";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@/components/Card/Card";
import useService from "@/hooks/useService";
import useServiceStyles from "./styles";

const Service = () => {
  const { title, subtitle, data } = useService();
  const { sxService } = useServiceStyles();

  return (
    <Box id="services" sx={sxService}>
      <Container maxWidth="lg" className="service-Container">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
        <Box className="service-GridWrapper">
          <Grid container spacing={{ xs: 2, lg: 3 }}>
            {data.map(({ title, description, url, imageSrc }, index) => (
              <Grid xs={6} key={index}>
                <Card
                  title={title}
                  description={description}
                  link={generateHref(url, Routes.Services)}
                  imageSrc={imageSrc}
                  sx={{ height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
