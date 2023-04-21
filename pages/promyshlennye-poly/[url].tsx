import React from "react";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { Box, Container, Typography } from "@mui/material";
import Layout from "@/layouts/Layout";
import useService, { servicesData } from "@/hooks/useService";
import mdxContent from "@/lib/mdxContent";
import mdxComponents from "@/lib/mdxComponents";
import DebugJson from "@/utils/DebugJson";

const ServicePage = ({ mdxSource }) => {
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
        <Box id="service" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h1">{service.title}</Typography>
            <DebugJson data={service} />
            <Box
              display="flex"
              flexDirection="column"
              gap={3}
              component="article"
            >
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default ServicePage;

export async function getStaticPaths() {
  const urls = servicesData.map((service) => service.url);

  const paths = urls.map((url) => ({
    params: { url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const mdxSource = await mdxContent("data/services", params.url);

  return {
    props: {
      mdxSource,
    },
  };
}
