import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

const Card = ({
  title,
  description,
  imageSrc,
  onButtonClick1,
  onButtonClick2,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 4,

        backgroundColor: "#EEEEEE",
        position: "relative",
        transition: "transform 0.2s, background-color 0.2s", // добавлено свойство transition
        "&:hover": {
          transform: "scale(1.05)", // добавлено свойство transform
          backgroundColor: "#FFFFFF", // изменено свойство backgroundColor
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <ButtonGroup
        variant="contained"
        fullWidth
        sx={{
          position: "absolute",
          bottom: "140px",
          width: "50%",
          right: 25,
          gap: "5px",
          boxShadow: "none",
        }}
      >
        <Button
          onClick={onButtonClick1}
          sx={{
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "white",
          }}
        >
          Подробнее
        </Button>
        <Button
          onClick={onButtonClick2}
          sx={{
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "white",
          }}
        >
          Стоимость
        </Button>
      </ButtonGroup>

      <CardMedia
        component="img"
        image={imageSrc}
        alt="card"
        sx={{ borderRadius: 1 }}
      />
      <Typography variant="h5" component="div" gutterBottom sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default Card;
