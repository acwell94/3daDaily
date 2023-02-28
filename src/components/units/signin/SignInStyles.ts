"use client";
import { breakPoints } from "@src/styles/media";
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
  width: 50%;
  padding: 8rem 10rem;
  @media ${breakPoints.mobileWidth} {
    width: 80%;
    height: 80%;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 80%;
    height: 80%;
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

export const UserSelectBox = styled.div`
  ${flexBox("row", "center", "center")}
  margin-top: 4rem;
  width: 100%;
  @media ${breakPoints.mobileWidth} {
    margin-top: 8rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-top: 8rem;
  }
`;

export const UserSelectText = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: ${theme.colors.lightGray};
  cursor: pointer;
  margin-right: 2rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
    margin-right: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
    margin-right: 3rem;
  }
`;
export const SignUpText = styled(UserSelectText)`
  border-left: 1px solid ${theme.colors.lightGray};
  /* margin-left: 3rem; */
  padding-left: 2rem;
  @media ${breakPoints.mobileWidth} {
    padding-left: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding-left: 3rem;
  }
`;
