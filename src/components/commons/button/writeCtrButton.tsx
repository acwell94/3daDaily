"use client";
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
`;

const LeftBtn = styled.div`
  ${flexBox("col", "center", "center")}
  width: 16rem;
  padding: 2rem 0;
  background-color: ${theme.colors.mainPurple};
  border-radius: 8px;
  color: ${theme.colors.white};
  font-size: 2rem;
  line-height: 2.5rem;
  cursor: pointer;
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
