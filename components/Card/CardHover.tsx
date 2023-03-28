import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import { useCardHoverStyles } from "./styles";

interface CardProps {
  imageSrc: string;
  link: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  link,
  imageSrc,
  title,
  description,
}): React.ReactElement => {
  const { CSSCardHover } = useCardHoverStyles({ title, description });

  return (
    <MuiCard sx={CSSCardHover}>
      <Box position="relative">
        <MuiCardMedia component="img" image={imageSrc} />
      </Box>
    </MuiCard>
  );
};

export default Card;
