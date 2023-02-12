"use client";
import { breakPoints } from "@src/styles/media";
import theme from "@src/utils/theme";
import styled from "styled-components";
interface IProps {
  title: string;
}

const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 5rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 5rem;
  }
  @media ${breakPoints.foldScreen} {
    font-size: 4rem;
  }
  line-height: 5rem;
  font-weight: 700;
  color: ${theme.colors.darkGray};
  margin-bottom: 4rem;
`;

const UserFlowTitle = ({ title }: IProps) => {
  return <Title>{title}</Title>;
};

export default UserFlowTitle;
