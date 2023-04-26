import React from "react";
import Link from "next/link";
import Routes from "@/routes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CardHover from "@/components/Card/CardHover";
import { Button } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import usePortfolio from "@/hooks/usePortfolio";

interface PortfolioPhotosProps {
  limit?: number;
}

const PortfolioPhotos: React.FC<PortfolioPhotosProps> = ({ limit }) => {
  const { photoData } = usePortfolio({ limit });

  return (
    <>
      <Box className="portfolio-Wrapper">
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {photoData.map(
            ({ title, description, imageSrc, type, square }, index) => (
              <Grid xs={6} sm={4} key={index}>
                <CardHover
                  title={title}
                  description={description}
                  // link={link}
                  imageSrc={imageSrc}
                  type={type}
                  square={square}
                  sx={{ height: "100%" }}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {limit !== undefined ? (
        <Box className="button-buttonWrapper">
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
    </>
  );
};

export default PortfolioPhotos;
