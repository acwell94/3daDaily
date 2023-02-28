import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import { ChangeEvent } from "react";
import styled from "styled-components";
import SearchIcon from "../../../../public/icon/search.png";

const Container = styled.div`
  ${flexBox("row", "start", "start")}
  width: 98%;
  height: 7rem;
  position: relative;
  margin-bottom: 6rem;
  @media ${breakPoints.mobileWidth} {
    height: 20rem;
  }
  @media ${breakPoints.mobileHeight} {
    height: 20rem;
  }
`;

const SearchImg = styled(Image)`
  width: 3rem;
  height: 3rem;
  top: 50%;
  left: 5rem;
  transform: translateY(-50%);
  position: absolute;
  @media ${breakPoints.mobileWidth} {
    width: 5rem;
    height: 5rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 5rem;
    height: 5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  color: ${theme.colors.lightGray};
  font-size: 2.6rem;
  padding: 2rem 9.3rem;
  margin: 0;
  @media ${breakPoints.mobileWidth} {
    font-size: 5rem;
    padding: 2rem 12.3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
    padding: 2rem 12.3rem;
  }
`;

interface IProps {
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SettingsSearchInput = ({ handler }: IProps) => {
  return (
    <Container>
      <SearchImg src={SearchIcon} alt="search" />
      <Input placeholder="이메일을 입력해 주세요." onChange={handler} />
    </Container>
  );
};

export default SettingsSearchInput;
