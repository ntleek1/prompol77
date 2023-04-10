import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useContactsStyles from "./styles";

const Contacts = () => {
  const { ContactsCSS, ContactsLineCSS } = useContactsStyles();

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
                +7 (985) 727-14-14
              </Typography>
            </Box>
            {/* <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                &nbsp;
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                +7 (985) 727-14-14
              </Typography>
            </Box> */}
            <Box display="flex" gap={3} color="green">
              <Typography width={300} display="flex" gap={2}>
                <WhatsAppIcon fontSize="small" />
                WhatsApp
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                +7 (985) 727-14-14
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
                9857271414@mail.ru
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
            Реквизиты компании
          </Typography>

          <Box display="flex" flexDirection="column" gap={0}>
            <Box display="flex" gap={3}>
              <Typography width={300} display="flex" gap={2}>
                Компания
              </Typography>
              <Box component="hr" sx={ContactsLineCSS} />
              <Typography width={300} fontWeight={600}>
                ООО “ПОЛ77”
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
