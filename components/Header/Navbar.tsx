import React from "react";
import { Container, Box } from "@mui/material";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <Box component="section" id="navbar" className={styles.navbar}>
      <Container className={styles.container}>
        <Box>Logo</Box>
        <Box>Menu</Box>
        <Box>Buttons</Box>
      </Container>
    </Box>
  );
};

export default Navbar;
