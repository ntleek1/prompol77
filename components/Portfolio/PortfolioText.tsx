import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import usePortfolio from "@/hooks/usePortfolio";

interface PortfolioTextProps {
  limit?: number;
}

const PortfolioText: React.FC<PortfolioTextProps> = ({ limit }) => {
  const { textData } = usePortfolio({ limit });

  return (
    <>
      <Box className="portfolio-Wrapper">
        <Grid container spacing={2}>
          {textData.map(({ title, description, square }, index) => (
            <Grid xs={12} md={6} gap={1} key={index}>
              <Box className="porfolio-textList">
                <Typography component="p" variant="h6">
                  {title} - {square}
                </Typography>
                <Typography component="p" variant="body2">
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioText;
