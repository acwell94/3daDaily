"use client";
import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  handler?: () => void;
  title: string;
  isCancel?: boolean;
}

interface IStyleProps {
  isCancel?: boolean;
}

const Button = styled.button<IStyleProps>`
  ${flexBox("row", "center", "center")}
  width: 40%;
  padding: 2rem 0;
  background-color: ${(props) =>
    props.isCancel ? `${theme.colors.gray}` : `${theme.colors.lightGray}`};
  border-radius: 8px;
  cursor: pointer;
  @media ${breakPoints.mobileWidth} {
    padding: 3rem 0;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 4rem 0;
  }
`;

const ButtonTitle = styled.div<IStyleProps>`
  color: ${(props) =>
    props.isCancel ? `${theme.colors.lightGray}` : `${theme.colors.white}`};
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.8rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
`;

const ModalButton = ({ handler, title, isCancel }: IProps) => {
  return (
    <Button onClick={handler} isCancel={isCancel}>
      <ButtonTitle isCancel={isCancel}>{title}</ButtonTitle>
    </Button>
  );
};

export default ModalButton;
