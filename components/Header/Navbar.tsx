import React from "react";
import { Box, Container, Button, ButtonGroup } from "@mui/material";
import styles from "../../styles/Navbar.module.scss";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  return (
    <Box component="section" id="navbar" className={styles.navbar}>
      <Container className={styles.container}>
        <Box className={styles.logo}>
          <img src="/Logo.jpg" />
        </Box>

        <Box className={styles.categories}>
          <a href="#">Виды полов</a>
          <a href="#">Наши работы</a>
          <a href="#">Гарантии</a>
          <a href="#">Контакт</a>
        </Box>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{}}
        >
          <Button
            sx={{ backgroundColor: "#EF4444", color: "white", mr: 1 }}
            startIcon={<CalendarViewMonthRoundedIcon />}
          >
            Выбрать вид полов
          </Button>
          <Button
            sx={{ backgroundColor: "#365FA1", color: "white" }}
            startIcon={<EmailIcon />}
          >
            Смотреть готовые работы
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Navbar;
