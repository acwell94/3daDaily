import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@src/styles/globalStyle";
import styled from "styled-components";
import localFont from "@next/font/local";
import { Work_Sans } from "@next/font/google";
const Main = styled.div`
  width: 100%;
  height: 100%;
`;
const myFont = localFont({
  src: "../public/fonts/SpoqaHanSansNeo-Regular.otf",
});
// const workSans = Work_Sans({
//   subsets: ["latin"],
//   weight: "800",
// });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <RecoilRoot>
        <GlobalStyle />
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
      </RecoilRoot>
    </Main>
  );
}
