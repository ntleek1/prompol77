import { styled } from "@mui/system";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardImage = styled(CardMedia)({
  height: 140,
});

const CardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

const CardTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const CardDescription = styled(Typography)({
  fontSize: "1rem",
});

const Card = ({ image, title, description }) => {
  return (
    <MuiCard>
      <CardMedia component="img" image={image} alt={title} />
      <CardContentWrapper>
        <CardTitle gutterBottom variant="h5">
          {title}
        </CardTitle>
        <CardDescription variant="body2" color="textSecondary">
          {description}
        </CardDescription>
      </CardContentWrapper>
    </MuiCard>
  );
};

export default Card;
