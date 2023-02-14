import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";

export const LogoMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem;
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
`;

export const ButtonBox = styled.div`
  width: 98%;
`;

export const ImageBox = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: 50%;
  margin-bottom: 4rem;
`;
export const DefaultImage = styled(Image)`
  cursor: pointer;
  border-radius: 50%;
`;
