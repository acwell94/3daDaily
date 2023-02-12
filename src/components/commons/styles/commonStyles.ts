"use client";
import { breakPoints } from "@src/styles/media";
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
  width: 50%;
  padding: 8rem 10rem;
  @media ${breakPoints.mobileWidth} {
    width: 80%;
    padding: 8rem 20rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 80%;
    padding: 8rem 20rem;
  }
  @media ${breakPoints.smallScreen} {
    width: 80%;
    padding: 8rem 10rem;
  }
  @media ${breakPoints.foldScreen} {
    width: 80%;
    padding: 8rem 6rem;
  }
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 16px;
  /* height: 100%; */
`;

export const CommonFormBox = styled.form`
  width: 100%;
`;

export const LogoMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem 0 20rem;
  background-color: ${theme.colors.ashBlue};
  height: 100vh;
  position: relative;
  @media ${breakPoints.mobileWidth} {
    padding: 10rem 10rem 0 10rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 10rem 10rem 0 10rem;
  }
  @media ${breakPoints.smallScreen} {
    padding: 5rem 6rem 0 6rem;
  }
`;
export const LogoMainBox = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;

  max-width: 124rem;
  @media ${breakPoints.mobileWidth} {
    max-width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    max-width: 100%;
  }

  overflow-y: scroll;
`;

export const WriteMain = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.ashBlue};
  position: relative;
  overflow-y: scroll;
`;

export const WriteMainBox = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  max-width: 124rem;
  @media ${breakPoints.mobileWidth} {
    width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    width: 100%;
  }

  overflow-y: scroll;
`;

// 글쓰기 컴포넌트 용

export const WriteContainer = styled.div`
  ${flexBox("col", "center", "center")}
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
  ${flexBox("col", "center", "between")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 98%;
  height: 100%;
  max-height: 50rem;
  @media ${breakPoints.mobileHeight} {
    padding: 3rem 10rem;
  }
  @media ${breakPoints.smallScreen} {
    padding: 3rem 10rem;
  }
`;

export const WriteImgBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: 5rem;
  width: 100%;
  @media ${breakPoints.mobileHeight} {
    grid-template-columns: 20% 20% 20% 20%;
  }
  @media ${breakPoints.smallScreen} {
    grid-template-columns: 20% 20% 20% 20%;
  }
`;

interface IStyle {
  current: boolean;
}

export const WriteItem = styled.div<IStyle>`
  ${flexBox("col", "center", "center")}
  cursor: pointer;
  box-shadow: ${(props) =>
    props.current ? `0px 0px 1rem rgba(97, 100, 187, 0.3)` : null};
  padding: 1rem 0;
`;

export const WriteImgLimit = styled.div`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  position: relative;
  @media ${breakPoints.mobileHeight} {
    width: 8rem;
    height: 8rem;
  }
  @media ${breakPoints.smallScreen} {
    width: 7rem;
    height: 7rem;
  }
`;

export const WriteImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const WriteImgTitle = styled.div`
  font-size: 2rem;
  color: ${theme.colors.mainPurple};
  font-weight: 700;
  word-break: keep-all;
  text-align: center;
`;
