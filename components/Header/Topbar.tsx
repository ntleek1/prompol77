import React from "react";
import { Box, Container } from "@mui/material";
import useHeaderStyles from "./styles";

const Topbar = () => {
  const { CSSFlexbox, CSSTopbar } = useHeaderStyles();

  return (
    <Box component="section" id="topbar" sx={CSSTopbar}>
      <Container sx={CSSFlexbox}>
        <Box>Left side</Box>
        <Box>Right side</Box>
      </Container>
    </Box>
  );
};

export default Topbar;
