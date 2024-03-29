"use client";
import styled from "styled-components";
import { flexBox } from "@src/utils/flexBox";
interface IProps {
  addStyle?: object;
  title?: string;
  handler?: () => void;
}

interface StyleProps {
  addStyle?: {
    marginBottom?: string;
    backgroundColor?: string;
    titleColor?: string;
    fontSize?: string;
    fontWeight?: number;
  };
}

const Button = styled.button<StyleProps>`
  cursor: pointer;
  ${flexBox("row", "center", "center")}
  width: 100%;
  padding: 3rem 0;
  background-color: ${(props) => {
    return props.addStyle?.backgroundColor;
  }};
  margin-bottom: ${(props) => {
    return props.addStyle?.marginBottom;
  }};
  border-radius: 20px;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const ButtonTitle = styled.div<StyleProps>`
  line-height: 3.8rem;
  font-size: ${(props) => {
    return props.addStyle?.fontSize;
  }};
  color: ${(props) => {
    return props.addStyle?.titleColor;
  }};
  font-weight: ${(props) => {
    return props.addStyle?.fontWeight;
  }};
`;

const IntroButton = ({ addStyle = {}, title, handler }: IProps) => {
  return (
    <Button addStyle={addStyle} onClick={handler}>
      <ButtonTitle addStyle={addStyle}>{title}</ButtonTitle>
    </Button>
  );
};

export default IntroButton;
