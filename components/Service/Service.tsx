import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@/components/Card/Card";
import useService from "@/hooks/useService";
import useServiceStyles from "./styles";

const Service = () => {
  const { title, subtitle, data } = useService();
  const { CSSService, CSSServiceContainer, CSSGridWrapper } =
    useServiceStyles();

  return (
    <Box id="service" sx={CSSService}>
      <Container maxWidth="lg" sx={CSSServiceContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Box sx={CSSGridWrapper}>
          <Grid container spacing={2}>
            {data.map(({ title, description, link, imageSrc }, index) => (
              <Grid xs={12} sm={6} gap={1} key={index}>
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
      </Container>
    </Box>
  );
};

export default Service;
