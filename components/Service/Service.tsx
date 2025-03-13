import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import { Routes, generateHref } from "@/routes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@/components/Card/Card";
import useService from "@/hooks/useService";
import useServiceStyles from "./styles";
import Button from "@mui/material/Button";

interface ServiceProps {
  headerVariant?: "h1" | "h2" | "h3";
  limit?: number;
}

const Service: React.FC<ServiceProps> = ({ headerVariant = "h2", limit }) => {
  const { header, description, data } = useService({ limit });
  const { sxService } = useServiceStyles();

  return (
    <Box id="service" component="section" sx={sxService}>
      <Container maxWidth="lg" className="service-Container">
        <Typography variant={headerVariant}>{header}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box className="service-GridWrapper">
          <Grid container spacing={{ xs: 1, md: 2 }}>
            {data.map(({ title, description, url, imageSrc }, index) => (
             <Grid xs={12} sm={6} key={index}>
  <Card
    title={title}
    description={description}
    link={generateHref(url, Routes.Service)}
    imageSrc={imageSrc}
    sx={{ height: "100%" }}
  />
</Grid>
            ))}
          </Grid>
        </Box>
        {limit !== undefined ? (
          <Box className="button-buttonWrapper">
            <Link href={Routes.Service} passHref>
              <Button
                color="error"
                variant="contained"
                startIcon={<PlaylistAddCheckOutlinedIcon />}
              >
                Смотреть все виды полов
              </Button>
            </Link>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Service;
