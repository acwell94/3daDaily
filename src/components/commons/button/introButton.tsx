"use client";
import styled, { css } from "styled-components";
import { flexBox } from "@src/utils/flexBox";
interface IProps {
  addStyle?: {
    marginBottom?: string;
    backgroundColor?: string;
    titleColor?: string;
    fontSize?: string;
    fontWeight?: number;
  };
  title?: string;
  handler?: () => void;
}

const Button = styled.div<IProps>`
  cursor: pointer;
  ${flexBox("row", "center", "center")}
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    return props.addStyle?.backgroundColor;
  }};
  margin-bottom: ${(props) => {
    return props.addStyle?.marginBottom;
  }};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonTitle = styled.div<IProps>`
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

const IntroButton = (props: IProps) => {
  const { addStyle = {}, title, handler } = props;
  return (
    <Button addStyle={addStyle} onClick={handler}>
      <ButtonTitle addStyle={addStyle}>{title}</ButtonTitle>
    </Button>
  );
};

export default IntroButton;