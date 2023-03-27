import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import styles from "../../styles/Navbar.module.scss";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  return (
    <Box component="section" id="navbar" className={styles.navbar}>
      <Container className={styles.container}>
        <Box className={styles.logo}>Logo</Box>
        <Box className={styles.categories}>
          <a href="#">Виды полов</a>
          <a href="#">Наши работы</a>
          <a href="#">Гарантии</a>
          <a href="#">Контакт</a>
        </Box>
        <Box className={styles.buttons}>
          <Button
            variant="contained"
            startIcon={<CalendarViewMonthRoundedIcon />}
          >
            Прайс лист
          </Button>
          <Button variant="contained" startIcon={<EmailIcon />}>
            Оставить заявку
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
