import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import GlobalStyles from "@/components/GlobalStyles";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </GlobalStyles>
  );
}
