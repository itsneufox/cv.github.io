import Head from "next/head";
import "../styles/base.scss";
import "../styles/fonts.css";
import "../styles/theme.css";
import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Head>
          <title>CV&nbsp;|&nbsp;João Lopes Frias</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}