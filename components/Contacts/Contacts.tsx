import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import useContactsStyles from "./styles";

const Contacts = () => {
  const {
    ContactsCSS,
    ContactsBoxCSS,
    ContactsIconCSS,
    ContactsAccountTreeIconCSS,
    ContactsLineCSS,
    ContactsDataCSS,
    ContactsLineBoxCSS,
  } = useContactsStyles();

  return (
    <Box id="about" sx={ContactsCSS}>
      <Container>
        <Box display="flex" flexDirection="column" gap={4}>
          <Typography variant="h2">Контактная информация</Typography>

          <Box display="flex" flexDirection="column" gap={0}>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                <PhoneIcon fontSize="small" />
                Телефон в Москве
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                +7 (495) 664-34-68
              </Typography>
            </Box>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                &nbsp;
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                +7 (495) 664-34-68
              </Typography>
            </Box>
            <Box display="flex" gap={3} color="green">
              <Typography width={300} display="flex" gap={2}>
                <WhatsAppIcon fontSize="small" />
                WhatsApp
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                +7 (495) 664-34-68
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={3}>
            <Typography width={300} display="flex" gap={2}>
              <EmailIcon fontSize="small" />
              Электронная почта
            </Typography>
            <Box component="hr" sx={ContactsLineCSS} />
            <Typography width={300} fontWeight={600}>
              <a
                href="mailto:info@pol77.ru"
                style={{ textDecoration: "none", color: "#365FA1" }}
              >
                info@pol77.ru
              </a>
            </Typography>
          </Box>

          <Typography variant="h3" mt={3}>
            График работы
          </Typography>

          <Box display="flex" flexDirection="column" gap={0}>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                <CalendarMonthIcon fontSize="small" />
                Будние дни
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                С 09:00 до 19:00
              </Typography>
            </Box>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                <CalendarMonthIcon fontSize="small" sx={{ opacity: 0 }} />
                СБ и ВС
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                Выходные дни
              </Typography>
            </Box>
          </Box>

          <Typography variant="h3" mt={3}>
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
              size="small"
            >
              Смотреть на Яндекс Картах
            </Button>
          </Box>

          <Box>
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <CardMedia
                component="img"
                image="/map.jpg"
                alt="Карта"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Card>
          </Box>

          <Typography variant="h3" mt={3}>
            Реквизиты компании
          </Typography>

          <Box display="flex" flexDirection="column" gap={0}>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                Компания
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                ООО &quot;ПОЛ77&quot;
              </Typography>
            </Box>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                ИНН
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                1234567890
              </Typography>
            </Box>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                ОГРН
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                0000000000000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
