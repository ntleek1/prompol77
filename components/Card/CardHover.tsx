import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardContent from "@mui/material/CardContent";
import { useCardHoverStyles } from "./styles";
import { Typography } from "@mui/material";

interface CardHoverProps {
  imageSrc: string;
  // link: string;
  title: string;
  description: string;
  type: string;
  square: string;
}

const CardHover: React.FC<CardHoverProps> = ({
  // link,
  imageSrc,
  title,
  description,
  type,
  square,
}): React.ReactElement => {
  const { CSSCardHover, CSSCardHoverContent } = useCardHoverStyles();

  return (
    <MuiCard sx={CSSCardHover}>
      <Box position="relative">
        <MuiCardMedia component="img" image={imageSrc} />
      </Box>
      <MuiCardContent sx={CSSCardHoverContent}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1" component="p" color="black">
          {description}
        </Typography>
        <Typography
          variant="small"
          component="p"
          color="text.secondary"
          fontWeight="light"
          pt={1}
        >
          {type}
          <br />
          {square}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
};

export default CardHover;
