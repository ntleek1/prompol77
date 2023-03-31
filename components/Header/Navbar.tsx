import React from "react";
import { Box, Container, Button, Link, Typography } from "@mui/material";
import styles from "../../styles/Navbar.module.scss";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box component="section" id="navbar" className={styles.navbar}>
      <Container className={styles.container}>
        <Box className={styles.logo} flexShrink={0}>
          <Link href="/">
            <Image src="/Logo.jpg" alt="Logo" fill />
          </Link>
        </Box>

        <Box className={styles.categories}>
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
