"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const InputBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-bottom: 1rem;
`;

export const UserSelectBox = styled.div`
  ${flexBox("row", "center", "center")}
  margin-top: 4rem;
  width: 100%;
`;

export const UserSelectText = styled.div`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: ${theme.colors.lightGray};
  cursor: pointer;
  margin-right: 2rem;
`;
export const SignUpText = styled(UserSelectText)`
  border-left: 1px solid ${theme.colors.lightGray};
  /* margin-left: 3rem; */
  padding-left: 2rem;
`;
