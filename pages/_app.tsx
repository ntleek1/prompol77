import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "@/themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
