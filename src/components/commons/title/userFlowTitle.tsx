"use client";
import { breakPoints } from "@src/styles/media";
import theme from "@src/utils/theme";
import styled from "styled-components";
interface IProps {
  title: string;
}

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: keep-all;
  color: ${theme.colors.darkGray};
  width: 100%;
  margin-bottom: 4rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 8rem;
    text-align: left;
    margin-bottom: 7rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 8rem;
    text-align: left;
    margin-bottom: 7rem;
  }

  @media ${breakPoints.foldScreen} {
    font-size: 7rem;
    margin-bottom: 7rem;
  }
`;

const UserFlowTitle = ({ title }: IProps) => {
  return <Title>{title}</Title>;
};

export default UserFlowTitle;
