"use client";
import styled from "styled-components";
import Image from "next/image";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import { breakPoints } from "@src/styles/media";

export const LogoMain = styled.div`
  ${flexBox("col", "start", "center")}
  padding: 10rem 20rem 0 20rem;
  @media ${breakPoints.mobileWidth} {
    padding: 10rem 10rem 0 10rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 10rem 10rem 0 10rem;
  }
  @media ${breakPoints.smallScreen} {
    padding: 5rem 6rem 0 6rem;
  }
  background-color: ${theme.colors.ashBlue};

  height: 100vh;
  position: relative;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SideButtonBox = styled.div`
  position: absolute;
  right: 2%;
  bottom: 2%;
  z-index: 2;
`;

export const BotVisibleButton = styled.div`
  ${flexBox("row", "center", "center")}
  width: 7rem;
  height: 7rem;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const BotProfileBox = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
`;

export const BotProfile = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const SettingVisibleButton = styled.div`
  ${flexBox("col", "center", "center")}
  width: 7rem;
  height: 7rem;
  background-color: ${theme.colors.sliverGray};
  border-radius: 50%;

  cursor: pointer;
`;

export const SettingProfileBox = styled.div`
  width: 50%;
  height: 50%;
  position: relative;
`;

export const SettingText = styled.div`
  font-size: 1.2rem;
  color: ${theme.colors.white};
  @media ${breakPoints.mobileWidth} {
    display: none;
  }
  @media ${breakPoints.mobileHeight} {
    display: none;
  }
`;

export const InfoBox = styled.div`
  ${flexBox("row", "between", "center")}
  @media all and (max-width: 400px) {
    ${flexBox("col", "center", "center")}
  }
  margin-bottom: 4rem;
  width: 98%;
`;

export const UserBox = styled.div`
  ${flexBox("row", "center", "center")}
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
    margin-bottom: 2rem;
  }
`;

export const ProfileImgBox = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  position: relative;
  @media ${breakPoints.smallScreen} {
    width: 7rem;
    height: 7rem;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export const Profile = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserInfoText = styled.div`
  ${flexBox("row", "center", "center")}
  font-size: 3rem;
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
  }
`;

export const UserNameBox = styled.div`
  ${flexBox("row")}
`;

export const UserName = styled.div`
  font-weight: 700;
  color: ${theme.colors.darkPurple};
`;

export const FeedBox = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  grid-row-gap: 4rem;
  width: 98%;

  @media ${breakPoints.mobileHeight} {
    grid-template-columns: 45% 45%;
  }
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
  }
`;

export const NoneDailyBox = styled.div`
  ${flexBox("col", "center", "center")}
  width: 98%;
  padding: 12rem 0;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
`;

export const NoneDailyText = styled.div`
  color: ${theme.colors.mainPurple};
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.8rem;
`;

export const NoneDailyTextSecond = styled(NoneDailyText)`
  margin-bottom: 6rem;
`;
