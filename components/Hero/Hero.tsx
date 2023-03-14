import React from "react";
import { Box } from "@mui/material";
import useHeroStyles from "./styles";

const Hero = () => {
  const { heroCSS } = useHeroStyles();

  return (
    <Box component="section" id="heroScreen" sx={heroCSS}>
      Hero Screen
    </Box>
  );
};

export default Hero;
