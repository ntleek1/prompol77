import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
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
              <Typography fontWeight={600}>+7 (985) 727-14-14</Typography>
            </Box>
            {/* <Box sx={ContactsFlexBoxCSS}>
              <Typography>
                &nbsp;
              </Typography>
              <Box component="hr" />
              <Typography fontWeight={600}>
                +7 (985) 727-14-14
              </Typography>
            </Box> */}
            <Box className="contacts-FlexBox" color="green">
              <Typography>
                <WhatsAppIcon fontSize="small" />
                WhatsApp
              </Typography>
              <Box component="hr" className="contacts-Line" />
              <Typography fontWeight={600}>+7 (985) 727-14-14</Typography>
            </Box>
          </Box>

          <Box className="contacts-FlexBox">
            <Typography>
              <EmailIcon fontSize="small" />
              Электронная почта
            </Typography>
            <Box component="hr" className="contacts-Line" />
            <Typography fontWeight={600}>
              <a
                href="mailto:info@pol77.ru"
                style={{ textDecoration: "none", color: "#365FA1" }}
              >
                9857271414@mail.ru
              </a>
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
