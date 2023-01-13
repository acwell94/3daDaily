"use client";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@src/styles/globalStyle";
import styled from "styled-components";
import { ThemeProvider, DefaultTheme } from "styled-components";
import localFont from "@next/font/local";
import Head from "next/head";
// import { Work_Sans } from "@next/font/google";
const Main = styled.div`
  width: 100%;
  height: 100vh;
`;
const myFont = localFont({
  src: "../public/fonts/SpoqaHanSansNeo-Regular.otf",
});
// const workSans = Work_Sans({
//   subsets: ["latin"],
//   weight: "800",
// });

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>삼다일기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main className={myFont.className}>
              <Component {...pageProps} />
            </Main>
          </ThemeProvider>
        </RecoilRoot>
      </>
    </>
  );
}
