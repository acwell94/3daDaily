"use client";
import styled from "styled-components";
import Image from "next/image";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";

export const InfoBox = styled.div`
  ${flexBox("row", "between", "center")}
  margin-bottom: 4rem;
  width: 100%;
`;

export const UserBox = styled.div`
  ${flexBox("row", "center", "center")}
`;

export const ProfileImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

export const Profile = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const UserInfoText = styled.div`
  ${flexBox("row", "center", "center")}
  font-size: 3rem;
`;

export const UserName = styled.div`
  font-weight: 700;
  color: ${theme.colors.darkPurple};
`;

export const FeedBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NoneDailyBox = styled.div`
  ${flexBox("col", "center", "center")}
  width: 100%;
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
