import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

type NextPageWithTheme = NextPage & {
  theme?: string;
};

type AppPropsWithTheme = AppProps & {
  Component: NextPageWithTheme;
};

export default function App({ Component, pageProps }: AppPropsWithTheme) {
  return (
    <ThemeProvider attribute="class" forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
