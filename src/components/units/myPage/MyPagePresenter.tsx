"use client";
import { LogoMainBox } from "@src/components/commons/styles/commonStyles";
import Profile from "../../../../public/icon/profile.png";
import * as S from "./MyPageStyles";
import WriteButton from "@src/components/commons/button/writeButton";
import FilterBox from "@src/components/commons/filter/filterBox";
import MyPageStory from "@src/components/commons/items/myPageStory";
import useLink from "@src/components/commons/hooks/useLink";
import LogoItem from "@src/components/commons/items/logoItem";
import ChatBot from "@src/components/commons/items/chatBot";
import Bot from "../../../../public/icon/botIcon.png";
interface IProps {
  isChatBotVisible: boolean;
  chatBotHandler: () => void;
}

const MyPagePresenter = ({ isChatBotVisible, chatBotHandler }: IProps) => {
  return (
    <S.LogoMain>
      <ChatBot isVisible={isChatBotVisible} chatBotHandler={chatBotHandler} />
      <S.BotVisibleButton onClick={chatBotHandler}>
        <S.BotProfileBox>
          <S.BotProfile src={Bot} alt="bot" fill={true} />
        </S.BotProfileBox>
      </S.BotVisibleButton>
      <LogoMainBox>
        <LogoItem />
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
            <WriteButton handler={useLink("/write")} />
          </>
        </S.InfoBox>
        <FilterBox />
        <S.FeedBox>
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
        </S.FeedBox>
        {/* 피드가 없을 경우 */}
        {/* <S.NoneDailyBox>
          <S.NoneDailyText>아직 일기가 없습니다.</S.NoneDailyText>
          <S.NoneDailyTextSecond>
            첫 번째 일기를 작성해 주세요.
          </S.NoneDailyTextSecond>
          <WriteButton handler={useLink("/write")} />
        </S.NoneDailyBox> */}
      </LogoMainBox>
    </S.LogoMain>
  );
};

export default MyPagePresenter;
