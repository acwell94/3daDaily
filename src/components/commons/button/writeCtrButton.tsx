"use client";
import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  leftTitle?: string;
  rightTitle?: string;
  leftHandler?: () => void;
  rightHandler?: () => void;
}

const Container = styled.div`
  ${flexBox("row", "between", "center")}
  width: 98%;
  margin-top: 6rem;
  @media ${breakPoints.mobileWidth} {
    margin-top: 8rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-top: 8rem;
  }
`;

const LeftBtn = styled.div`
  ${flexBox("col", "center", "center")}
  width: 16rem;
  padding: 2rem 0;
  background-color: ${theme.colors.mainPurple};
  border-radius: 8px;
  color: ${theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
  @media ${breakPoints.mobileWidth} {
    width: 24rem;
    padding: 3rem 0;
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 24rem;
    padding: 3rem 0;
    font-size: 4rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 4rem;
  }
`;

const RightBtn = styled(LeftBtn)`
  background-color: ${theme.colors.deepPurple};
`;

const WriteCtrButton = ({
  leftTitle,
  rightTitle,
  leftHandler,
  rightHandler,
}: IProps) => {
  return (
    <Container>
      {leftTitle ? (
        <LeftBtn onClick={leftHandler}>{leftTitle}</LeftBtn>
      ) : (
        <div></div>
      )}
      <RightBtn onClick={rightHandler}>{rightTitle}</RightBtn>
    </Container>
  );
};

export default WriteCtrButton;
