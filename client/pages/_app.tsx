import "../styles/globals.css";
import type { AppProps } from "next/app";
import "macro-css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
