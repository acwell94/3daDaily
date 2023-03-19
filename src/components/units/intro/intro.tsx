"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../../public/logo.webp";
import IntroButton from "../../commons/button/introButton";
import theme from "@src/utils/theme";
import { useRouter } from "next/router";
import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
const Main = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
  height: 100vh;
  background: rgb(148, 150, 197);
  background: linear-gradient(
    50deg,
    rgba(148, 150, 197, 1) 0%,
    rgba(148, 150, 197, 1) 40%,
    rgba(224, 186, 205, 1) 100%
  );
`;

const MainBox = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
  @media ${breakPoints.mobileWidth} {
    ${flexBox("col", "center", "center")}
    padding: 0 10rem;
  }
  @media ${breakPoints.mobileHeight} {
    ${flexBox("col", "center", "center")}
    padding: 0 10rem;
  }
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
    padding: 0 10rem;
  }
  @media ${breakPoints.foldScreen} {
    ${flexBox("col", "center", "center")}
    padding: 0 10rem;
  }
`;

const LogoBox = styled.div`
  width: 50rem;
  height: 60rem;
  position: relative;
  margin-right: 20rem;
  @media ${breakPoints.mobileWidth} {
    margin: 0;
    margin-bottom: 10rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin: 0;
    margin-bottom: 10rem;
  }
  @media ${breakPoints.smallScreen} {
    margin: 0;
    margin-bottom: 10rem;
  }
  @media ${breakPoints.foldScreen} {
    width: 100%;
    margin: 0;
    margin-bottom: 10rem;
  }
`;

const ButtonBox = styled.div`
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 46rem;
  @media ${breakPoints.mobileWidth} {
    width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    width: 100%;
  }
  @media ${breakPoints.smallScreen} {
    width: 100%;
  }
  @media ${breakPoints.foldScreen} {
    width: 100%;
  }
`;

const Intro = () => {
  const router = useRouter();
  const linkHandler = (link: string) => {
    router.push(link);
  };
  return (
    <Main>
      <MainBox id="Main">
        <LogoBox>
          <Image
            src={Logo}
            alt="user profile picture"
            sizes="(max-width: 500px) 50vw, 100vw"
            fill={true}
            // width={500}
            // height={500}
          />
        </LogoBox>
        <ButtonBox>
          <IntroButton
            addStyle={{
              marginBottom: "6rem",
              backgroundColor: theme.colors.white,
              fontSize: "3rem",
              titleColor: theme.colors.darkPurple,
              fontWeight: 700,
            }}
            title="회원가입"
            handler={() => linkHandler("signup")}
          />

          <IntroButton
            title="로그인"
            addStyle={{
              marginBottom: "6rem",
              backgroundColor: theme.colors.darkPurple,
              fontSize: "3rem",
              titleColor: theme.colors.white,
              fontWeight: 700,
            }}
            handler={() => linkHandler("signin")}
          />
          <IntroButton
            title="안드로이드 다운로드"
            addStyle={{
              backgroundColor: theme.colors.sliverGray,
              fontSize: "3rem",
              titleColor: theme.colors.ashBlue,
              fontWeight: 700,
            }}
            handler={() => window.open(`https://bit.ly/3ZlyLCF`)}
          />
        </ButtonBox>
      </MainBox>
    </Main>
  );
};

export default Intro;
