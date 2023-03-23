import React from "react";
import CustomCard from "@/components/Card/Card";
import { ServiceGrid, ServiceFlex } from "./styles";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";

const handleButtonClick1 = () => {
  console.log("Кнопка 1 нажата");
};

const handleButtonClick2 = () => {
  console.log("Кнопка 2 нажата");
};

const Service = () => {
  return (
    <Box id="service" sx={{ py: 8, backgroundColor: "#EEEEEE" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, ml: 2 }}>
          Промышленные полы
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, ml: 2 }}>
          Наша компания специализируется на производстве высококачественных
          промышленных полов, мы используем только качественные материалы от
          проверенных производителей. Предлагаем ознакомиться со списком видов
          полов и их назначения.
        </Typography>
        <ServiceGrid sx={{ ml: -2, mr: -2 }}>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2 }}>
            <CustomCard
              title={
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заголовок карточки 1
                </a>
              }
              description="Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей."
              imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
              onButtonClick1={handleButtonClick1}
              onButtonClick2={handleButtonClick2}
            />
          </Grid>
        </ServiceGrid>
      </Container>
    </Box>
  );
};

export default Service;
