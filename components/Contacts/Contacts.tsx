import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import useContactsStyles from "./styles";

const Contacts = () => {
  const { ContactsCSS, ContactsHeaderCSS } = useContactsStyles();

  return (
    <Box id="about" sx={ContactsCSS}>
      <Container>
        <Typography variant="h2" sx={ContactsHeaderCSS}>
          Контактная информация
        </Typography>

        <Container>
          <Box display="flex">
            <Box sx={{ width: 205, display: "flex", flexDirection: "column" }}>
              <Typography>
                <PhoneIcon sx={{ marginRight: 1, fontSize: 23 }} />
                Телефон в Москве
              </Typography>
              <Typography>
                <br />
              </Typography>
              <Typography align="right">
                <WhatsAppIcon
                  sx={{ marginRight: 1, fontSize: 23, color: "green" }}
                />
                WhatsApp
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                marginLeft: 2,
                marginRight: 2,
                marginTop: 2,
              }}
            >
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                width: 180,
                display: "flex",
                flexDirection: "column",
                marginTop: 0.8,
              }}
            >
              <Typography>+7 (495) 664-34-68</Typography>
              <Typography>+7 (495) 664-34-68</Typography>
              <Typography>+7 (495) 664-34-68</Typography>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box display="flex" sx={{ marginTop: 5 }}>
            <Box sx={{ width: 205 }}>
              <Typography>
                <EmailIcon sx={{ marginRight: 1, fontSize: 23 }} />
                Электронная почта
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: 2,
                marginRight: 2,
                marginTop: 2,
              }}
            >
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                width: 180,
                marginTop: 0.8,
              }}
            >
              <Typography>
                <a
                  href="mailto:info@pol77.ru"
                  style={{ textDecoration: "none", color: "#365FA1" }}
                >
                  info@pol77.ru
                </a>
              </Typography>
            </Box>
          </Box>
        </Container>

        <Typography variant="h2" marginTop={6}>
          График работы
        </Typography>

        <Container>
          <Box display="flex" sx={{ marginTop: 5 }}>
            <Box sx={{ width: 205, display: "flex", flexDirection: "column" }}>
              <Typography>
                <CalendarMonthIcon sx={{ marginRight: 1, fontSize: 23 }} />
                Телефон в Москве
              </Typography>

              <Typography marginLeft={4}>СБ и ВС</Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                marginLeft: 2,
                marginRight: 2,
                marginTop: 2,
              }}
            >
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
            </Box>
            <Box
              sx={{
                width: 180,
                display: "flex",
                flexDirection: "column",
                marginTop: 0.8,
              }}
            >
              <Typography>С 09:00 до 19:00</Typography>
              <Typography>Выходные дни</Typography>
            </Box>
          </Box>
        </Container>

        <Typography variant="h2" marginTop={6}>
          Адрес и схема проезда
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography sx={{ marginRight: 5 }}>
            100100, г. Москва, ул. 1-я улица Текстильщиков, д. 12/9, офис 2
          </Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<PlaceIcon />}
            sx={{ marginLeft: 30 }}
          >
            Смотреть на Яндекс Картах
          </Button>
        </Box>

        <Container>
          <img
            src="/map.jpg"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
              marginTop: 30,
            }}
            alt="Карта"
          />
        </Container>

        <Typography variant="h2" marginTop={6}>
          Реквизиты компании
        </Typography>

        <Container>
          <Box display="flex" sx={{ marginTop: 5 }}>
            <Box sx={{ width: 205, display: "flex", flexDirection: "column" }}>
              <Typography>Компания</Typography>
              <Typography>ИНН</Typography>
              <Typography>ОГРН</Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                marginLeft: 2,
                marginRight: 2,
                marginTop: 2,
              }}
            >
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                  marginBottom: 2.2,
                }}
              />
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  borderTop: "1px dashed #000",
                  borderBottom: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                width: 180,
                display: "flex",
                flexDirection: "column",
                marginTop: 0.8,
              }}
            >
              <Typography>ООО “ПОЛ77”</Typography>
              <Typography>1234567890</Typography>
              <Typography>0000000000000</Typography>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              marginTop: 15,
            }}
          >
            <Typography mr="auto">© ПОЛ77, 2023</Typography>
            <Typography
              ml="auto"
              sx={{ textDecoration: "underline", color: "#244D94" }}
            >
              <AccountTreeIcon
                sx={{ marginRight: 2, fontSize: 27, color: "#244D94" }}
              />
              Карта сайта
            </Typography>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Contacts;
