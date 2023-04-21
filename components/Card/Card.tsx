import React from "react";
import { CardActionArea, SxProps } from "@mui/material";
import Link from "next/link";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import { useCardStyles } from "./styles";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  sx?: SxProps;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  imageSrc,
  sx,
}): React.ReactElement => {
  const { CSSCard, CSSMedia, CSSContent, CSSButtonGroup, CSSTitle } =
    useCardStyles();

  return (
    <MuiCard sx={{ ...CSSCard, ...sx }}>
      <CardActionArea sx={CSSMedia}>
        <MuiCardMedia component="img" image={imageSrc} alt={title} />
        <Link
          href={link}
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
        <ButtonGroup variant="contained" sx={CSSButtonGroup}>
          <Button
            LinkComponent={Link}
            href={link}
            size="small"
            color="inherit"
            variant="outlined"
          >
            Подробнее
          </Button>
        </ButtonGroup>
      </CardActionArea>

      <MuiCardContent sx={CSSContent}>
        <Typography variant="h6" component="h6" gutterBottom sx={CSSTitle}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" color="text.secondary">
          {description}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
};

export default Card;
