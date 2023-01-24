"use client";

import theme from "@src/utils/theme";
import styled from "styled-components";
interface IProps {
  title?: string;
  isComplete?: boolean;
  handler?: (a?: any) => void;
}

interface StyleProps {
  background?: boolean;
}

const Button = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.background
      ? `${theme.colors.darkPurple}`
      : `${theme.colors.lightPurple}`};
  border-radius: 8px;
  width: 100%;
  padding: 2rem 0;
  color: ${theme.colors.white};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
`;

const UserFlowButton = ({ title, isComplete, handler }: IProps) => {
  return (
    <Button onClick={handler} background={isComplete}>
      {title}
    </Button>
  );
};

export default UserFlowButton;
