import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useIsMobile from "@/hooks/useIsMobile";
import useCallUsBannerStyles from "./styles";

const CallUsBanner = () => {
  const {
    CallUsBannerCSS,
    CallUsWrapperCSS,
    CallUsBannerPhonesCSS,
    CallUsBannerButtonCSS,
  } = useCallUsBannerStyles();

  const isMobile = useIsMobile();

  return (
    <Box component="section" id="BannerBox" sx={CallUsBannerCSS}>
      <Container>
        <Box sx={CallUsWrapperCSS}>
          <Box flex={1}>
            <Typography
              variant="h2"
              component="p"
              align={isMobile ? "left" : "right"}
            >
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
            <Typography
              variant="subtitle2"
              align="left"
              maxWidth="480px"
              component="p"
              pt={1}
            >
              Консультация по выбору полов - бесплатно! Обращайтесь к нам за
              помощью в выборе наилучшего решения для вашего помещения.
            </Typography>

            <Button
              sx={CallUsBannerButtonCSS}
              variant="contained"
              startIcon={<EmailIcon />}
            >
              Оставить заявку
            </Button>

            <Box sx={CallUsBannerPhonesCSS}>
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
