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
    align-items: flex-start;
    justify-content: space-between;
    padding: 8rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 80%;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8rem;
  }

  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 16px;
`;
export const CommonFormBox = styled.form`
  width: 100%;
  @media ${breakPoints.mobileWidth} {
    height: 100%;
    padding-top: 4rem;
    ${flexBox("col", "between", "center")}
  }
  @media ${breakPoints.mobileHeight} {
    height: 100%;
    padding-top: 4rem;
    ${flexBox("col", "between", "center")}
  }
`;

export const InputBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-bottom: 1rem;
  @media ${breakPoints.mobileWidth} {
    width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    width: 100%;
  }
`;

export const QuestionBox = styled.div`
  ${flexBox("row", "center", "center")}
  margin-bottom: 4rem;
  @media ${breakPoints.mobileWidth} {
    margin-bottom: 8rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-bottom: 8rem;
  }
  @media ${breakPoints.smallScreen} {
    flex-direction: column;
    margin-bottom: 8rem;
  }
`;

export const Question = styled.div`
  color: ${theme.colors.lightGray};
  font-size: 2rem;
  font-weight: 400;
  margin-right: 2rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
  @media ${breakPoints.smallScreen} {
    margin-bottom: 2rem;
  }
`;

export const LinkToLogin = styled.button`
  color: #333333;
  font-size: 2rem;
  margin-right: 3rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
`;

export const ImageBox = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 50%;
  margin-bottom: 4rem;
  @media ${breakPoints.mobileWidth} {
    width: 20rem;
    height: 20rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 20rem;
    height: 20rem;
  }
`;
export const DefaultImage = styled(Image)`
  cursor: pointer;
  border-radius: 50%;
`;
