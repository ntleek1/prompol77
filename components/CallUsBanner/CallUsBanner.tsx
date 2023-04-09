import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useCallUsStyles from "./styles";

const CallUs = () => {
  const { CallUsCSS, CallUsHeaderCSS, CallUsPhonesCSS } = useCallUsStyles();

  return (
    <Box component="section" id="BannerBox" sx={CallUsCSS}>
      <Container>
        <Box display="flex" flexDirection="row" gap={2}>
          <Box flex={1}>
            <Typography variant="h1" component="p" sx={CallUsHeaderCSS}>
              Получите бесплатную <br /> консультацию
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={4}
            alignItems="baseline"
          >
            <Typography variant="h6" align="left">
              Консультация по выбору полов - бесплатно! <br /> Обращайтесь к нам
              за помощью в выборе <br /> наилучшего решения для вашего
              помещения.
            </Typography>

            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              sx={{ mt: 9 }}
            >
              Оставить заявку
            </Button>

            <Box sx={CallUsPhonesCSS} alignSelf="end">
              <Box>
                <Typography variant="h4" component="p">
                  +7 (495) 664-34-68 <br /> +7 (495) 664-34-68
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallUs;
