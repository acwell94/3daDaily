import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const Main = styled.div`
  ${flexBox("col", "start", "center")}
  height: 100%;
  background-color: ${theme.colors.ashBlue};
  position: relative;
`;

export const DeveloperContainer = styled.div`
  ${flexBox("row", "center", "center")}
  width: 70%;
`;

export const DeveloperBox = styled.div`
  ${flexBox("row", "start", "start")}
  width: 100%;
`;

export const DeveloperImgBox = styled.div`
  width: 38rem;
  height: 40rem;
  border-radius: 2rem;
  position: relative;
  margin-right: 10rem;
`;

export const DeveloperInfo = styled.div`
  width: 50%;
`;

export const TitleText = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.deepPurple};
  margin-bottom: 2rem;
`;

export const SubTitleText = styled.div`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export const SmallText = styled.div`
  font-size: 1.8rem;
  margin-top: 2rem;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 3rem;
`;

interface StyleProps {
  addStyle?: {
    margin?: string;
    backgroundColor?: string;
    titleColor?: string;
    fontSize?: string;
    fontWeight?: number;
  };
}

export const DevelopButton = styled.button<StyleProps>`
  padding: 1rem;
  font-size: 3rem;
  border-radius: 1rem;
  background-color: ${(props) => {
    return props.addStyle?.backgroundColor;
  }};
  color: ${(props) => {
    return props.addStyle?.titleColor;
  }};
  margin: ${(props) => {
    return props.addStyle?.margin;
  }};
`;
