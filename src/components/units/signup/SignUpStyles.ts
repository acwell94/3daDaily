"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const InputBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-bottom: 1rem;
`;

export const QuestionBox = styled.div`
  ${flexBox("row", "center", "center")}
  margin-bottom: 4rem;
`;

export const Question = styled.div`
  color: ${theme.colors.lightGray};
  font-size: 2rem;
  margin-right: 3rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const LinkToLogin = styled.div`
  color: #333333;
  font-size: 2rem;
  margin-right: 3rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  cursor: pointer;
`;
