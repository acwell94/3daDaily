"use client";
import Profile from "../../../../public/icon/profile.png";
import * as S from "./MyPageStyles";
import WriteButton from "@src/components/commons/button/writeButton";
import FilterBox from "@src/components/commons/filter/filterBox";
import MyPageStory from "@src/components/commons/items/myPageStory";
import useLink from "@src/components/commons/hooks/useLink";
import LogoItem from "@src/components/commons/items/logoItem";
import ChatBot from "@src/components/commons/items/chatBot";
import Bot from "../../../../public/icon/botIcon.png";
import Settings from "../../../../public/icon/settingPage.png";
interface IProps {
  isChatBotVisible: boolean;
  chatBotHandler: () => void;
  storyData:
    | {
        user: {
          _id: string;
          name: string;
          email: string;
          profileImg: string;
        };
        story: [
          {
            address: string;
            creator: string;
            date: string;
            feeling: string;
            firstContents: string;
            secondContents: string;
            thirdContents: string;
            id: string;
            image: string;
            location: {
              lat: number;
              lng: number;
            };
            title: string;
            weather: string;
            what: string;
            withWhom: string;
            _id: string;
          },
        ];
      }
    | undefined;
  getSortedContents: (category: string, sort: string) => void;
  prevSelect: { category: string; sort: string };
}

const MyPagePresenter = ({
  isChatBotVisible,
  chatBotHandler,
  storyData,
  getSortedContents,
  prevSelect,
}: IProps) => {
  return (
    <S.LogoMain>
      <ChatBot isVisible={isChatBotVisible} chatBotHandler={chatBotHandler} />
      <S.SideButtonBox>
        <S.BotVisibleButton onClick={chatBotHandler}>
          <S.BotProfileBox>
            <S.BotProfile
              src={Bot}
              alt="bot"
              fill={true}
              sizes="(max-width: 500px) 50vw, 100vw"
            />
          </S.BotProfileBox>
        </S.BotVisibleButton>
        <S.SettingVisibleButton onClick={useLink("/settings")}>
          <S.SettingProfileBox>
            <S.BotProfile
              src={Settings}
              alt="setting"
              fill={true}
              sizes="(max-width: 500px) 50vw, 100vw"
            />
          </S.SettingProfileBox>
          <S.SettingText>설정</S.SettingText>
        </S.SettingVisibleButton>
      </S.SideButtonBox>
      <S.LogoMainBox>
        <LogoItem />
        <S.InfoBox>
          <S.UserBox>
            <S.ProfileImgBox>
              <S.Profile
                src={storyData?.user.profileImg || Profile}
                alt="profile"
                fill={true}
                sizes="(max-width: 500px) 50vw, 100vw"
              />
            </S.ProfileImgBox>
            <S.UserInfoText>
              <S.UserNameBox>
                <S.UserName>{storyData?.user.name || "유저"}</S.UserName>
                <>님,</>
              </S.UserNameBox>
              <>어떤 하루를 보내셨나요?</>
            </S.UserInfoText>
          </S.UserBox>
          <>
            <WriteButton handler={useLink("/write")} />
          </>
        </S.InfoBox>
        <FilterBox
          count={storyData?.story ? storyData.story.length : 0}
          getSortedContents={getSortedContents}
          selected={prevSelect}
        />
        {storyData?.story.length ? (
          <S.FeedBox>
            {storyData?.story.map((el) => (
              <MyPageStory key={el.id} data={el} id={el._id} />
            ))}
          </S.FeedBox>
        ) : (
          <S.NoneDailyBox>
            <S.NoneDailyText>아직 일기가 없습니다.</S.NoneDailyText>
            <S.NoneDailyTextSecond>
              첫 번째 일기를 작성해 주세요.
            </S.NoneDailyTextSecond>
            <WriteButton handler={useLink("/write")} />
          </S.NoneDailyBox>
        )}
      </S.LogoMainBox>
    </S.LogoMain>
  );
};

export default MyPagePresenter;
