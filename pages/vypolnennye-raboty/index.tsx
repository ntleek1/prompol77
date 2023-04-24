import React from "react";
// import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Box, Container } from "@mui/material";
import Layout from "@/layouts/Layout";
import Routes from "@/routes";
import { Meta } from "@/next-seo.config";
import Portfolio from "@/components/Portfolio/Portfolio";

const PortfolioPage = () => {
  // const router = useRouter();
  // const { url } = router.query;

  return (
    <>
      <NextSeo
        title={Meta[Routes.Portfolio].title}
        description={Meta[Routes.Portfolio].description}
      />
      <Layout>
        <Box id="portfolio">
          <Container maxWidth="lg">
            <Portfolio headerVariant="h1" />
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default PortfolioPage;
