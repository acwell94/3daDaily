"use client";
import Image from "next/image";
import styled from "styled-components";
import useLink from "../hooks/useLink";
import TitleLogo from "../../../../public/titleLogo.png";
import { memo, useEffect, useState } from "react";
import { breakPoints } from "@src/styles/media";
const LogoBox = styled.div`
  padding-top: 5rem;
  position: relative;
  width: 30rem;
  margin-bottom: 5rem;
  @media ${breakPoints.mobileWidth} {
    padding-top: 3rem;
    margin-bottom: 8rem;
    width: 50rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding-top: 2rem;
    margin-bottom: 8rem;
    width: 50rem;
  }
  @media ${breakPoints.smallScreen} {
    width: 40rem;
  }
  cursor: pointer;
`;

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;

interface IUser {
  userId: string;
  email: string;
}

const LogoItem = () => {
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    const data = localStorage.getItem("data");
    setUserData(JSON.parse(data));
  }, []);
  return (
    <LogoBox onClick={useLink(`/mypage/${userData?.userId}`)}>
      <Logo
        src={TitleLogo}
        alt="titleLogo"
        sizes="(max-width: 500px) 50vw, 100vw"
      />
    </LogoBox>
  );
};

export default memo(LogoItem);
