"use client";
import styled from "styled-components";
import Image from "next/image";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";

export const MainBox = styled.div`
  ${flexBox("col", "center", "center")}
  width: 100%;
  max-width: 124rem;
`;

export const LogoBox = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 4rem;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;

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
