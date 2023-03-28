import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardContent from "@mui/material/CardContent";
import { useCardHoverStyles } from "./styles";
import { Typography } from "@mui/material";

interface CardHoverProps {
  imageSrc: string;
  link: string;
  title: string;
  description: string;
  type: string;
  square: string;
}

const CardHover: React.FC<CardHoverProps> = ({
  link,
  imageSrc,
  title,
  description,
  type,
  square,
}): React.ReactElement => {
  const { CSSCardHover } = useCardHoverStyles({ title, description });

  return (
    <MuiCard sx={CSSCardHover}>
      <Box position="relative">
        <MuiCardMedia component="img" image={imageSrc} />
      </Box>
      <MuiCardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "white",
          opacity: 0,
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6" align="center">
          {title}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
};

export default CardHover;
