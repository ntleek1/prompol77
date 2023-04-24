import React from "react";
// import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { Meta } from "@/next-seo.config";
import mdxContent from "@/lib/mdxContent";
import mdxComponents from "@/lib/mdxComponents";
import { Box, Container } from "@mui/material";
import Layout from "@/layouts/Layout";
import Routes from "@/routes";
import WarrantyBanner from "@/components/WarrantyBanner/WarrantyBanner";

const WarrantyPage = ({ mdxSource }) => {
  // const router = useRouter();
  // const { url } = router.query;

  return (
    <>
      <NextSeo
        title={Meta[Routes.Warranty].title}
        description={Meta[Routes.Warranty].description}
      />
      <Layout>
        <Box id="warranty">
          <WarrantyBanner showButtons={false} />
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            py={6}
            component="article"
          >
            <MDXRemote {...mdxSource} components={mdxComponents} />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default WarrantyPage;

export async function getStaticProps() {
  const mdxSource = await mdxContent("data/warranty", "index");

  return {
    props: {
      mdxSource,
    },
  };
}
