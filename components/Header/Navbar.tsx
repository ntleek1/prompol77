import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Container, Button } from "@mui/material";
import useHeaderStyles from "./styles";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

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
            <Image src="/images/logo.png" alt="Logo" width={68} height={48} />
            ПолПромРФ
          </Typography>
        </Box>

        <Box component="nav" className="navbar__menu">
          <Typography
            component={Link}
            href="#service"
            variant="body2"
            scroll={false}
          >
            Виды полов
          </Typography>
          <Typography
            component={Link}
            href="#portfolio"
            variant="body2"
            scroll={false}
          >
            Наши работы
          </Typography>
          <Typography
            component={Link}
            href="#about"
            variant="body2"
            scroll={false}
          >
            Гарантии
          </Typography>
          <Typography
            component={Link}
            href="#contacts"
            variant="body2"
            scroll={false}
          >
            Контакты
          </Typography>
        </Box>

        <Box className="navbar__buttonGroup">
          <Button
            href="#service"
            variant="contained"
            color="error"
            size="small"
            startIcon={<PlaylistAddCheckOutlinedIcon />}
          >
            Выбрать вид полов
          </Button>
          <Button
            href="#portfolio"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ImageOutlinedIcon />}
          >
            Портфолио
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
