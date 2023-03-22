import React from "react";
import CustomCard from "@/components/Card/Card";
import { ServiceGrid, ServiceFlex } from "./styles";

const handleButtonClick1 = () => {
  console.log("Кнопка 1 нажата");
};

const handleButtonClick2 = () => {
  console.log("Кнопка 2 нажата");
};

const Service = () => {
  return (
    <ServiceGrid>
      <ServiceFlex>
        <CustomCard
          title="Заголовок карточки 1"
          description="Описание карточки 1"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
        <CustomCard
          title="Заголовок карточки 2"
          description="Описание карточки 2"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
        <CustomCard
          title="Заголовок карточки 3"
          description="Описание карточки 3"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
      </ServiceFlex>
      <ServiceFlex>
        <CustomCard
          title="Заголовок карточки 4"
          description="Описание карточки 4"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
        <CustomCard
          title="Заголовок карточки 5"
          description="Описание карточки 5"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
        <CustomCard
          title="Заголовок карточки 6"
          description="Описание карточки 6"
          imageSrc="https://www.polimer-s-group.ru/assets/images/resources/4/5.jpg"
          onButtonClick1={handleButtonClick1}
          onButtonClick2={handleButtonClick2}
        />
      </ServiceFlex>
    </ServiceGrid>
  );
};

export default Service;
