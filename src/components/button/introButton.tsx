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
}

const Button = styled.div<IProps>`
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
  const { addStyle = {}, title } = props;
  return (
    <Button addStyle={addStyle}>
      <ButtonTitle addStyle={addStyle}>{title}</ButtonTitle>
    </Button>
  );
};

export default IntroButton;
