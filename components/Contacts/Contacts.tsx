import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useContactsStyles from "./styles";

const Contacts = () => {
  const { sxContacts } = useContactsStyles();

  return (
    <Box id="contacts" component="section" sx={sxContacts}>
      <Container>
        <Box display="flex" flexDirection="column" gap={4}>
          <Typography variant="h2" className="contacts-Header">
            Контактная информация
          </Typography>

          <Box display="flex" flexDirection="column" gap={4}>
            <Box className="contacts-FlexBox">
              <Typography>
                <PhoneIcon fontSize="small" />
                Телефон в Москве
              </Typography>
              <Box component="hr" className="contacts-Line" />
              <Typography
                component={Link}
                href="tel:+79775002266"
                fontWeight={600}
                color="inherit"
              >
                +7 (977) 500-22-66
              </Typography>
            </Box>
            <Box className="contacts-FlexBox" color="green">
              <Typography>
                <WhatsAppIcon fontSize="small" />
                WhatsApp
              </Typography>
              <Box component="hr" className="contacts-Line" />
              <Typography
                component={Link}
                href="https://api.whatsapp.com/send?phone=79775002266"
                fontWeight={600}
                color="green"
              >
                +7 (977) 500-22-66
              </Typography>
            </Box>
          </Box>

          <Box className="contacts-FlexBox">
            <Typography>
              <EmailIcon fontSize="small" />
              Электронная почта
            </Typography>
            <Box component="hr" className="contacts-Line" />
            <Typography
              component={Link}
              href="mailto:9775002266@pol77.ru"
              fontWeight={600}
              color="inherit"
            >
              9775002266@mail.ru
            </Typography>
          </Box>

          <Typography variant="h3" className="contacts-Header">
            График работы
          </Typography>

          <Box display="flex" flexDirection="column" gap={4}>
            <Box className="contacts-FlexBox">
              <Typography>
                <CalendarMonthIcon fontSize="small" />
                Будние дни
              </Typography>
              <Box component="hr" className="contacts-Line" />
              <Typography fontWeight={600}>С 09:00 до 19:00</Typography>
            </Box>
            <Box className="contacts-FlexBox">
              <Typography>СБ и ВС</Typography>
              <Box component="hr" className="contacts-Line" />
              <Typography fontWeight={600}>Выходные дни</Typography>
            </Box>
          </Box>

          <Typography variant="h3" mt={3}>
            Адрес и схема проезда
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography sx={{ marginRight: 5 }}>
              141006, МО, г. Мытищи, Шараповский проезд, д. 1Б, офис 205
            </Typography>
            {/* <Button
              variant="contained"
              color="error"
              startIcon={<PlaceIcon />}
              size="small"
              href="https://yandex.ru/maps/-/CDXIB7q"
              target="_blank"
            >
              Смотреть на Яндекс Картах
            </Button> */}
          </Box>

          {/* <Box>
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <CardMedia
                component="img"
                image="/images/map.jpg"
                alt="Карта"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Card>
          </Box> */}

          {/* <Typography variant="h3" sx={ContactsHeaderCSS}>
            Реквизиты компании
          </Typography>

          <Box display="flex" flexDirection="column" gap={0}>
            <Box sx={ContactsFlexBoxCSS}>
              <Typography>Компания</Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography fontWeight={600}>ООО “ПОЛ77”</Typography>
            </Box>
            <Box sx={ContactsFlexBoxCSS}>
              <Typography>ИНН</Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography fontWeight={600}>1234567890</Typography>
            </Box>
            <Box sx={ContactsFlexBoxCSS}>
              <Typography>ОГРН</Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography fontWeight={600}>0000000000000</Typography>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
