import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyName } from "@/next-seo.config";
import { Box, Typography, Container } from "@mui/material";
import useHeaderStyles from "./styles";
import { MenuNav } from "@/routes";
import Order from "../Order/Order";

const Navbar = () => {
  const { sxNavbar } = useHeaderStyles();

  return (
    <Box id="navbar" sx={sxNavbar}>
      <Container className="navbar__container">
        <Box className="navbar__logo">
          <Typography
            component={Link}
            href="/"
            variant="h4"
            display="flex"
            alignItems="center"
            gap={2}
            color="black"
          >
            <Image src="/images/logo.png" alt="Лого" width={68} height={48} />
            {CompanyName}
          </Typography>
        </Box>

        <Box component="nav" className="navbar__menu">
          {MenuNav.map((navItem) =>
            navItem.isVisible ? (
              <Typography
                key={navItem.anchor}
                component={Link}
                href={navItem.anchor}
                variant="body2"
                scroll={false}
              >
                {navItem.label}
              </Typography>
            ) : null
          )}
        </Box>

        <Box className="navbar__buttonGroup">
          <Order size="small" />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
