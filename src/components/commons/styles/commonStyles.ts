"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const CommonMain = styled.div`
  ${flexBox("row", "center", "center")}
  padding: 10rem 0;
  background-color: ${theme.colors.ashBlue};
  height: 100%;
  position: relative;
`;

export const CommonMainBox = styled.div`
  ${flexBox("col", "center", "center")}
  padding: 8rem 20rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 16px;
  /* height: 100%; */
`;

export const LogoMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem 0 20rem;
  background-color: ${theme.colors.ashBlue};
  height: 100vh;
  position: relative;
`;
export const LogoMainBox = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  max-width: 124rem;
`;

export const WriteMain = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.ashBlue};
  position: relative;
`;
