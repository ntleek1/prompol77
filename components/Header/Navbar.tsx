import React from "react";
import { Box, Container, Button, Link } from "@mui/material";
import useHeaderStyles from "./styles";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

const Navbar = () => {
  const {
    CSSNavbarStyle,
    CSSContainerStyle,
    CSSLogoStyle,
    CSSCategoriesStyle,
  } = useHeaderStyles();

  return (
    <Box component="section" id="navbar" sx={CSSNavbarStyle}>
      <Container sx={CSSContainerStyle}>
        <Box sx={CSSLogoStyle} flexShrink={0}>
          <Link href="/">
            <Image src="/Logo.jpg" alt="Logo" fill />
          </Link>
        </Box>

        <Box sx={CSSCategoriesStyle}>
          <Link href="#" variant="body2">
            Виды полов
          </Link>
          <Link href="#" variant="body2">
            Наши работы
          </Link>
          <Link href="#" variant="body2">
            Гарантии
          </Link>
          <Link href="#" variant="body2">
            Контакт
          </Link>
        </Box>

        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<CalendarViewMonthRoundedIcon />}
          >
            Выбрать вид полов
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<EmailIcon />}
          >
            Смотреть готовые работы
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
