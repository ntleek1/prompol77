import React from "react";
import Image from "next/image";
import { Box, Container, Button, Link } from "@mui/material";
import useHeaderStyles from "./styles";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const Navbar = () => {
  const { sxNavbar } = useHeaderStyles();

  return (
    <Box component="section" id="navbar" sx={sxNavbar}>
      <Container className="navbar__container">
        <Box className="navbar__logo">
          <Link
            href="/"
            variant="h4"
            display="flex"
            alignItems="center"
            gap={2}
            color="black"
          >
            <Image src="/images/logo.png" alt="Logo" width={68} height={48} />
            ПолПромРФ
          </Link>
        </Box>

        <Box className="navbar__menu">
          <Link href="#" variant="body1">
            Виды полов
          </Link>
          <Link href="#" variant="body1">
            Наши работы
          </Link>
          <Link href="#" variant="body1">
            Гарантии
          </Link>
          <Link href="#" variant="body1">
            Контакты
          </Link>
        </Box>

        <Box className="navbar__buttonGroup">
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<PlaylistAddCheckOutlinedIcon />}
          >
            Выбрать вид полов
          </Button>
          <Button
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
