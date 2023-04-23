import React from "react";
import Topbar from "@/components/Header/Topbar";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { Box, useTheme } from "@mui/material";
import useLayoutStyles from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sxAppBar, sxAppSpace } = useLayoutStyles();

  return (
    <>
      <Box sx={sxAppBar}>
        <Topbar />
        <Navbar />
      </Box>
      <Box sx={sxAppSpace}></Box>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
