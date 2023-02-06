"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const InputBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-bottom: 4rem;
`;

export const Input = styled.input`
  width: 60rem;
  border: 1px solid #999999;
  border-radius: 8px;
  padding: 2rem 3rem;
  font-size: 2rem;
  font-weight: 600;

  ::placeholder {
    color: ${theme.colors.blackGray};
  }
`;
