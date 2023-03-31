import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "@/themes";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
