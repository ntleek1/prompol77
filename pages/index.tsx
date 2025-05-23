import React from "react";
import { NextSeo } from "next-seo";
import Layout from "@/layouts/Layout";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";
import CallUsBanner from "@/components/CallUsBanner/CallUsBanner";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";
import WarrantyBanner from "@/components/WarrantyBanner/WarrantyBanner";
import Contacts from "@/components/Contacts/Contacts";
import { Meta } from "@/next-seo.config";
import Routes from "@/routes";

const Home = () => {
  return (
    <>
      <NextSeo
        title={Meta[Routes.Home].title}
        description={Meta[Routes.Home].description}
      />
      <Layout>
        <Hero />
        <Service limit={6} />
        <CallUsBanner />
        <Portfolio limit={6} />
        <About />
        <WarrantyBanner />
        <Contacts />
      </Layout>
    </>
  );
};

export default Home;
<meta name="yandex-verification" content="95b2e16955acc9a7" />
