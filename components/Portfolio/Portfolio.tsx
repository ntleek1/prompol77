import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Clients from "./Clients";
import PortfolioPhotos from "./PortfolioPhotos";
import PortfolioText from "./PortfolioText";
import usePortfolio from "@/hooks/usePortfolio";
import usePortfolioStyles from "./styles";

interface PortfolioProps {
  headerVariant?: "h1" | "h2" | "h3";
  limit?: number;
}

const Portfolio: React.FC<PortfolioProps> = ({
  headerVariant = "h2",
  limit,
}) => {
  const { header, description } = usePortfolio({ limit });
  const { sxPortfolio } = usePortfolioStyles();

  return (
    <Box id="portfolio" component="section" sx={sxPortfolio}>
      <Container maxWidth="lg" className="portfolio-Container">
        <Typography variant={headerVariant}>{header}</Typography>
        <Typography variant="body2">{description}</Typography>

        <PortfolioPhotos limit={limit} />
        {limit !== undefined ? null : <PortfolioText limit={limit} />}
        {limit !== undefined ? <Clients /> : null}
      </Container>
    </Box>
  );
};

export default Portfolio;
