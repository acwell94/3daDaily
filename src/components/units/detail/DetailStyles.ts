import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.ashBlue};
  height: 100vh;
  position: relative;
  @media ${breakPoints.mobileHeight} {
    ${flexBox("col", "center", "center")}
  }
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
    padding: 0 4rem;
  }
`;

export const MainPage = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 0;
  width: 80rem;
  height: 100%;
  @media ${breakPoints.mobileWidth} {
    width: 80rem;
    height: 80%;
  }
  @media ${breakPoints.mobileHeight} {
    width: 80rem;
    height: 80%;
  }
  @media ${breakPoints.smallScreen} {
    width: 100%;
    height: 80%;
  }
`;

export const DetailLightTitle = styled.div`
  ${flexBox("row")}
  font-size: 5rem;
  font-weight: 400;
  line-height: 5rem;
  color: ${theme.colors.darkGray};
  margin-bottom: 4rem;
`;

export const DetailBoldTitle = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 5rem;
  color: ${theme.colors.darkPurple};
`;

export const DetailContentsBox = styled.div`
  ${flexBox("col", "between", "between")}
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  margin-bottom: 4rem;
`;

export const DetailImgBox = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

export const DetailImg = styled(Image)`
  position: relative;
  border-radius: 8px 8px 0 0;
  object-fit: contain;
`;

export const DetailContents = styled.div`
  ${flexBox("col", "between", "start")}
  width: 100%;
  height: 50%;
  padding: 4rem;
  overflow: auto;
`;

export const ContentsTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.8rem;
  margin-bottom: 1rem;
`;

export const ContentsDate = styled.div`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin-bottom: 3rem;
  color: ${theme.colors.sliverGray};
`;

export const ContentsImg = styled.div`
  ${flexBox("row")}
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const IconBox = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
`;

export const Icon = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ContentsText = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  color: ${theme.colors.darkGray};
`;

export const ContentsTextLast = styled(ContentsText)`
  margin-bottom: 3rem;
`;

export const ContentsAddressBox = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
`;

export const AddressPinImgBox = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.5rem;
  position: relative;
`;

export const AddressPin = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ContentsAddress = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.sliverGray};
  line-height: 2rem;
  word-break: keep-all;
`;

export const ButtonBox = styled.div`
  ${flexBox("row", "between", "center")}
  width: 100%;
`;
