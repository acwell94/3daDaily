"use client";
import { LogoMain } from "@src/components/commons/styles/commonStyles";

import TitleLogo from "../../../../public/titleLogo.png";
import Profile from "../../../../public/profile.png";
import * as S from "./MyPageStyles";
import WriteButton from "@src/components/commons/button/writeButton";
import FilterBox from "@src/components/commons/filter/filterBox";
import MyPageStory from "@src/components/commons/items/myPageStory";

const MyPagePresenter = () => {
  return (
    <LogoMain>
      <S.MainBox>
        <S.LogoBox>
          <S.Logo src={TitleLogo} alt="titleLogo" />
        </S.LogoBox>
        <S.InfoBox>
          <S.UserBox>
            <S.ProfileImgBox>
              <S.Profile src={Profile} alt="profile" />
            </S.ProfileImgBox>
            <S.UserInfoText>
              <S.UserName>민영</S.UserName>님, 어떤 하루를 보내셨나요?
            </S.UserInfoText>
          </S.UserBox>
          <>
            <WriteButton />
          </>
        </S.InfoBox>
        <FilterBox />
        {/* <S.FeedBox>
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
          <MyPageStory />
        </S.FeedBox> */}
        {/* 피드가 없을 경우 */}
        <S.NoneDailyBox>
          <S.NoneDailyText>아직 일기가 없습니다.</S.NoneDailyText>
          <S.NoneDailyTextSecond>
            첫 번째 일기를 작성해 주세요.
          </S.NoneDailyTextSecond>
          <WriteButton />
        </S.NoneDailyBox>
      </S.MainBox>
    </LogoMain>
  );
};

export default MyPagePresenter;
