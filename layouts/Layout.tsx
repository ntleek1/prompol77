import React from "react";
import Topbar from "@/components/Header/Topbar";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
