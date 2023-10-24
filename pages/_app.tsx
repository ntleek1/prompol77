import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LightTheme } from "@/themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { YandexMetricaProvider } from "next-yandex-metrica";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <YandexMetricaProvider
        tagID={93456435}
        initParameters={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      >
        <Component {...pageProps} />
      </YandexMetricaProvider>
    </ThemeProvider>
  );
};

export default App;
