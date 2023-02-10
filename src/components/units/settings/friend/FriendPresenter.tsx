import LogoItem from "@src/components/commons/items/logoItem";
import SettingsSearchInput from "@src/components/commons/items/settingsSearchInput";

import SettingsSubTitle from "@src/components/commons/title/settingsSubTitle";
import SettingsTitle from "@src/components/commons/title/settingsTitle";

import * as S from "./FriendStyles";
import FriendList from "@src/components/commons/items/friendList";
import { ChangeEvent } from "react";

import ConfirmModal from "@src/components/commons/modal/confirmModal";

interface IProps {
  userData: {
    email: string;
    name: string;
    userId: string;
  };
  findEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  friendData: [
    { email: string; name: string; profileImg: string; _id: string },
  ];
  searchInput: string;
  findData: {
    foundUser: {
      email: string;
      name: string;
      profileImg: string;
      _id: string;
      id: string;
    };
  };
  deleteFriendHandler: (friendId: string) => void;
  createPairHandler: (friendEmail: string, friendId: string) => void;
  deleteFriendConfirmModalVisible: boolean;
  deleteConfirmModalHandler: () => void;
  createFriendConfirmModalVisible: boolean;
  createConfirmModalHandler: () => void;
}

const FriendPresenter = ({
  userData,
  findEmailHandler,
  friendData,
  searchInput,
  findData,
  deleteFriendHandler,
  createPairHandler,
  deleteFriendConfirmModalVisible,
  deleteConfirmModalHandler,
  createFriendConfirmModalVisible,
  createConfirmModalHandler,
}: IProps) => {
  console.log(findData);
  return (
    <>
      <ConfirmModal
        isVisible={deleteFriendConfirmModalVisible}
        title="친구가 삭제되었습니다."
        handler={deleteConfirmModalHandler}
        buttonTitle="확인"
      />
      <ConfirmModal
        isVisible={createFriendConfirmModalVisible}
        title="친구가 추가되었습니다."
        handler={createConfirmModalHandler}
        buttonTitle="확인"
      />
      <S.SettingsMain>
        <S.SettingsMainBox>
          <LogoItem />
          <SettingsTitle>친구 관리</SettingsTitle>
          <SettingsSearchInput handler={findEmailHandler} />
          <S.DataListBox>
            <SettingsSubTitle>친구 목록</SettingsSubTitle>

            {!searchInput && (
              <S.Data>
                {friendData?.length ? (
                  <>
                    {friendData.map((el) => (
                      <FriendList
                        data={el}
                        key={el._id}
                        id={el._id}
                        buttonTitle="삭제"
                        buttonHandler={() => deleteFriendHandler(el._id)}
                      />
                    ))}
                  </>
                ) : (
                  <S.NotFriend>아직 친구가 없습니다.</S.NotFriend>
                )}
              </S.Data>
            )}
            {searchInput && (
              <S.Data>
                {findData ? (
                  <>
                    <FriendList
                      data={findData.foundUser}
                      key={findData.foundUser._id}
                      id={findData.foundUser._id}
                      buttonTitle={
                        findData.foundUser._id === userData.userId
                          ? "본인"
                          : "추가"
                      }
                      buttonHandler={() =>
                        createPairHandler(
                          findData.foundUser.email,
                          findData.foundUser._id,
                        )
                      }
                    />
                  </>
                ) : (
                  <S.NotFriend>검색된 친구가 없습니다.</S.NotFriend>
                )}
              </S.Data>
            )}
          </S.DataListBox>
        </S.SettingsMainBox>
      </S.SettingsMain>
    </>
  );
};

export default FriendPresenter;
