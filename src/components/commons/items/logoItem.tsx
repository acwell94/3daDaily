import Image from "next/image";
import styled from "styled-components";
import useLink from "../hooks/useLink";
import TitleLogo from "../../../../public/titleLogo.png";
import { memo } from "react";
const LogoBox = styled.div`
  padding-top: 10rem;
  position: relative;
  width: 30rem;
  margin-bottom: 4rem;
  cursor: pointer;
`;

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;

const LogoItem = () => {
  return (
    <LogoBox onClick={useLink("/write")}>
      <Logo src={TitleLogo} alt="titleLogo" />
    </LogoBox>
  );
};

export default memo(LogoItem);
