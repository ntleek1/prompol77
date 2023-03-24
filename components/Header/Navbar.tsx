import React from "react";
import { Container, Box } from "@mui/material";
import styles from "../../styles/Navbar.module.scss";

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
          <button className={styles.button1}>Кнопка 1</button>
          <button className={styles.button2}>Кнопка 2</button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
