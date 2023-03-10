import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const SettingsMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem 0 20rem;
  background-color: ${theme.colors.ashBlue};
  height: 100vh;
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

export const SettingsMainBox = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  max-width: 124rem;
  @media ${breakPoints.mobileWidth} {
    max-width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    max-width: 100%;
  }
`;

export const DataListBox = styled.div`
  width: 98%;
  height: 100%;
`;
export const Data = styled.div`
  height: 60rem;
  overflow: scroll;
`;

export const NotFriend = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.deepPurple};
`;
