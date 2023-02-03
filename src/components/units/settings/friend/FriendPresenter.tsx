import LogoItem from "@src/components/commons/items/logoItem";
import SettingsSearchInput from "@src/components/commons/items/settingsSearchInput";

import SettingsSubTitle from "@src/components/commons/title/settingsSubTitle";
import SettingsTitle from "@src/components/commons/title/settingsTitle";

import Test from "../../../../../public/testImg/tImg.jpg";
import * as S from "./FriendStyles";
import FriendList from "@src/components/commons/items/friendList";

const DUMMY = [
  { id: "0", img: Test, email: "leminyoung@naver.com" },
  { id: "1", img: Test, email: "leminyoung2@naver.com" },
  { id: "2", img: Test, email: "leminyoung3@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung4@naver.com" },
  { id: "3", img: Test, email: "leminyoung77079@naver.com" },
];

const FriendPresenter = () => {
  return (
    <S.SettingsMain>
      <S.SettingsMainBox>
        <LogoItem />
        <SettingsTitle>친구 관리</SettingsTitle>
        <SettingsSearchInput />
        <S.DataListBox>
          <SettingsSubTitle>친구 목록</SettingsSubTitle>
          <S.Data>
            {DUMMY.map((el) => (
              <FriendList data={el} key={el.id} id={el.id} buttonTitle="추가" />
            ))}
          </S.Data>
        </S.DataListBox>
      </S.SettingsMainBox>
    </S.SettingsMain>
  );
};

export default FriendPresenter;
