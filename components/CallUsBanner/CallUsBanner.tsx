import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useCallUsBannerStyles from "./styles";

const CallUsBanner = () => {
  const {
    CallUsBannerCSS,
    CallUsWrapperCSS,
    CallUsBannerPhonesCSS,
    CallUsBannerButtonCSS,
  } = useCallUsBannerStyles();

  return (
    <Box component="section" id="BannerBox" sx={CallUsBannerCSS}>
      <Container>
        <Box sx={CallUsWrapperCSS}>
          <Box flex={1}>
            <Typography variant="h1" component="p">
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
              sx={CallUsBannerButtonCSS}
              variant="contained"
              startIcon={<EmailIcon />}
            >
              Оставить заявку
            </Button>

            <Box sx={CallUsBannerPhonesCSS} alignSelf="end">
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

export default CallUsBanner;
