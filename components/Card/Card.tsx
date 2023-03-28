import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import { useCardStyles } from "./styles";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  imageSrc,
}): React.ReactElement => {
  const { CSSCard, CSSContent, CSSButtonGroup } = useCardStyles();

  return (
    <MuiCard sx={CSSCard}>
      <Box position="relative">
        <MuiCardMedia component="img" image={imageSrc} alt={title} />
        <ButtonGroup variant="contained" sx={CSSButtonGroup}>
          <Button LinkComponent={Link} href={link}>
            Подробнее
          </Button>
        </ButtonGroup>
      </Box>

      <MuiCardContent sx={CSSContent}>
        <Typography variant="h5" component="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p" color="text.secondary">
          {description}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
};

export default Card;
