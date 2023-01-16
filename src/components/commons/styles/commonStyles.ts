import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

export const CommonMain = styled.div`
  padding: 10rem 0;
  ${flexBox("row", "center", "center")}
  background-color: ${theme.colors.ashBlue};
  height: 100%;
`;

export const CommonMainBox = styled.div`
  ${flexBox("col", "center", "center")}
  padding: 8rem 20rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 20px rgba(97, 100, 187, 0.3);
  border-radius: 16px;
  /* height: 100%; */
`;
