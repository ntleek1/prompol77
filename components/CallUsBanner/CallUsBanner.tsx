import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useCallUsBannerStyles from "./styles";

const CallUsBanner = () => {
  const { CallUsBannerCSS, CallUsBannerHeaderCSS, CallUsBannerPhonesCSS } =
    useCallUsBannerStyles();

  return (
    <Box component="section" id="BannerBox" sx={CallUsBannerCSS}>
      <Container>
        <Box display="flex" flexDirection="row" gap={2}>
          <Box flex={1}>
            <Typography variant="h1" component="p" sx={CallUsBannerHeaderCSS}>
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
            <Typography variant="subtitle1" align="left">
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

            <Box sx={CallUsBannerPhonesCSS} alignSelf="end">
              <Box>
                <Typography variant="h4" component="p">
                  {/* +7 (985) 727-14-14 <br /> +7 (985) 727-14-14 */}
                  +7 (985) 727-14-14
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallUsBanner;
