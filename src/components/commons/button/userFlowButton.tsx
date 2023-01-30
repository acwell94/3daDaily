"use client";

import theme from "@src/utils/theme";
import { memo } from "react";
import styled from "styled-components";
interface IProps {
  type?: "submit" | "button";
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

const UserFlowButton = ({ type, title, isComplete, handler }: IProps) => {
  console.log("2");
  return (
    <Button type={type || "button"} onClick={handler} background={isComplete}>
      {title}
    </Button>
  );
};

export default memo(UserFlowButton);
