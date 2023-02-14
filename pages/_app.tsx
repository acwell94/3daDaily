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
  /* position: relative; */
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

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="Keywords"
          content="삼다일기, 일기, 일기장, 간편한 일기장, 일기쓰기"
        />
        <meta name="title" content="삼다일기" />
        <meta
          name="description"
          content="3 줄이면 다 끝나는 오늘의 기록 삼다일기"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.3dadaily.store/" />
        <meta property="og:title" content="삼다일기" />
        <meta
          property="og:description"
          content="3 줄이면 다 끝나는 오늘의 기록 삼다일기"
        />
        <meta property="og:image" content="/OgImage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.3dadaily.store/" />
        <meta property="twitter:title" content="삼다일기" />
        <meta
          property="twitter:description"
          content="3 줄이면 다 끝나는 오늘의 기록 삼다일기"
        />
        <meta property="twitter:image" content="/OgImage.png" />
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
