"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
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

// 글쓰기 컴포넌트 용

export const WriteContainer = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  height: 100vh;
`;

export const WriteTitle = styled.div`
  color: ${theme.colors.lightGray};
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.8rem;
  margin-bottom: 4rem;
`;

export const WritePickBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 100%;
  height: 100%;
  max-height: 50rem;
`;

export const WriteImgBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 25% 25% 25% 25%;
  width: 100%;
  height: 100%;
`;

export const WriteItem = styled.div`
  ${flexBox("col", "center", "center")}
  cursor: pointer;
`;

export const WriteImg = styled(Image)`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
`;

export const WriteImgTitle = styled.div`
  font-size: 2rem;
  color: ${theme.colors.mainPurple};
  font-weight: 700;
`;
