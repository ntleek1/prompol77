import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyName } from "@/next-seo.config";
import { Box, Typography, Container, Button } from "@mui/material";
import useHeaderStyles from "./styles";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { MenuNav } from "@/routes";

const Navbar = () => {
  const { sxNavbar } = useHeaderStyles();

  const [redButton, blueButton] = MenuNav.filter((navItem) => navItem.isButton);

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
            navItem.isVisible && !navItem.isButton ? (
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
        {redButton.isVisible || blueButton.isVisible ? (
          <Box className="navbar__buttonGroup">
            {redButton.isVisible ? (
              <Button
                href={redButton.anchor}
                variant="contained"
                color="error"
                size="small"
                startIcon={<PlaylistAddCheckOutlinedIcon />}
              >
                {redButton.label}
              </Button>
            ) : null}
            {blueButton.isVisible ? (
              <Button
                href={blueButton.anchor}
                variant="contained"
                color="primary"
                size="small"
                startIcon={<ImageOutlinedIcon />}
              >
                {blueButton.label}
              </Button>
            ) : null}
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Navbar;
