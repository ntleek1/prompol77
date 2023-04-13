import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Box, Container } from "@mui/material";
import Layout from "@/layouts/Layout";
import useService from "@/hooks/useService";
import DebugJson from "@/utils/DebugJson";

const ServicePage = () => {
  const router = useRouter();
  const { url } = router.query;

  const { data } = useService();
  const service = data.find((item) => item.url === url);

  if (!service) {
    return null;
  }

  return (
    <>
      <NextSeo title={service.title} description={service.description} />
      <Layout>
        <Box id="service">
          <Container maxWidth="lg">
            <DebugJson data={service} />
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default ServicePage;
