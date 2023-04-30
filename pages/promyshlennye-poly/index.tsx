import React from "react";
// import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Box } from "@mui/material";
import Layout from "@/layouts/Layout";
import Routes from "@/routes";
import { Meta } from "@/next-seo.config";
import Service from "@/components/Service/Service";

const ServicePage = () => {
  // const router = useRouter();
  // const { url } = router.query;

  return (
    <>
      <NextSeo
        title={Meta[Routes.Service].title}
        description={Meta[Routes.Service].description}
      />
      <Layout>
        <Box id="service">
          <Service headerVariant="h1" />
        </Box>
      </Layout>
    </>
  );
};

export default ServicePage;
