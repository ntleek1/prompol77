/**
 * See SEO options here:
 * https://github.com/garmeeh/next-seo#nextseo-options
 */

import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s - PolProm",
  defaultTitle: "Floors",
  canonical: "https://floors.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://floors.vercel.app/",
    siteName: "Floors",
  },
};

export default config;
