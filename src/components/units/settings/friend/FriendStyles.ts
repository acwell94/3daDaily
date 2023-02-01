import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const SettingsMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem 0 20rem;
  background-color: ${theme.colors.ashBlue};
  height: 100vh;
`;

export const SettingsMainBox = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  max-width: 124rem;
`;

export const DataListBox = styled.div`
  width: 98%;
  height: 100%;
`;
export const Data = styled.div`
  height: 60rem;
  overflow: scroll;
`;
