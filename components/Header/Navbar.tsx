import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuNav } from "@/routes";
import { CompanyName } from "@/next-seo.config";
import { Box, Typography, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Order from "../Order/Order";
import useHeaderStyles from "./styles";

const Navbar = () => {
  const { sxNavbar } = useHeaderStyles();
  const [menuIsVisible, setMenuVisibility] = useState(false);

  const onMenuToggle = () => {
    setMenuVisibility(!menuIsVisible);
  };
  const onNavItemClick = () => {
    setMenuVisibility(false);
  };

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
            <Image src="/images/logo.png" alt="Лого" width={60} height={40} />
            {CompanyName}
          </Typography>
        </Box>

        <IconButton className="navbar__burger" onClick={onMenuToggle}>
          {!menuIsVisible ? <MenuIcon /> : <CloseIcon />}
        </IconButton>

        <Box
          className={[
            "navbar__menu",
            menuIsVisible ? "navbar__menu_visible" : "",
          ].join(" ")}
          onClick={onNavItemClick}
        >
          <Box component="nav" className="navbar__navigation">
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
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
