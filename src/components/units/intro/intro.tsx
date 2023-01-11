"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import IntroButton from "../../commons/button/introButton";
import theme from "@src/utils/theme";
import { useRouter } from "next/router";
const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(148, 150, 197);
  background: linear-gradient(
    50deg,
    rgba(148, 150, 197, 1) 0%,
    rgba(148, 150, 197, 1) 40%,
    rgba(224, 186, 205, 1) 100%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoBox = styled.div`
  margin-right: 200px;
`;

const ButtonBox = styled.div`
  width: 460px;
  height: 100px;
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
            // width={500}
            // height={500}
          />
        </LogoBox>
        <ButtonBox>
          <IntroButton
            addStyle={{
              marginBottom: "60px",
              backgroundColor: theme.colors.white,
              fontSize: "30px",
              titleColor: theme.colors.darkPurple,
              fontWeight: 700,
            }}
            title="회원가입"
            handler={() => linkHandler("signup")}
          />
          <IntroButton
            title="로그인"
            addStyle={{
              backgroundColor: theme.colors.darkPurple,
              fontSize: "30px",
              titleColor: theme.colors.white,
              fontWeight: 700,
            }}
            handler={() => linkHandler("signin")}
          />
        </ButtonBox>
      </MainBox>
    </Main>
  );
};

export default Intro;
