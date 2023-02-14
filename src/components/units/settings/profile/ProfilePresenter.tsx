import LogoItem from "@src/components/commons/items/logoItem";

import SettingsTitle from "@src/components/commons/title/settingsTitle";
import * as S from "./ProfileStyles";

import SettingsProfileChangeInput from "@src/components/commons/items/settingsProfileChangeInput";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import { ChangeEvent } from "react";
import AskModal from "@src/components/commons/modal/askModal";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
interface IProps {
  userData: {
    foundUser: {
      id: string;
      email: string;
      name: string;
      profileImg: string;
    };
  };
  filePickerRef: any;
  previewFile: any;
  pickedHandler: any;
  pickImageHandler: any;
  updateName: string;
  changeName: (e: ChangeEvent<HTMLInputElement>) => void;
  changeProfileHandler: () => void;
  askModalVisible: boolean;
  askModalHandler: () => void;
  confirmModalVisible: boolean;
  confirmModalHandler: () => void;
  confirmModalTitle: string;
}

const ProfilePresenter = ({
  userData,
  filePickerRef,
  previewFile,
  pickedHandler,
  pickImageHandler,
  updateName,
  changeName,
  changeProfileHandler,
  askModalVisible,
  askModalHandler,
  confirmModalVisible,
  confirmModalHandler,
  confirmModalTitle,
}: IProps) => {
  return (
    <>
      <AskModal
        isVisible={askModalVisible}
        title="정말로 수정하시겠습니까?"
        cancelHandler={askModalHandler}
        successHandler={changeProfileHandler}
      />
      <ConfirmModal
        title={confirmModalTitle}
        isVisible={confirmModalVisible}
        handler={confirmModalHandler}
        buttonTitle="확인"
      />
      <S.LogoMain>
        <S.LogoMainBox>
          <LogoItem />
          <SettingsTitle>프로필 관리</SettingsTitle>
          {previewFile ? (
            <S.ImageBox>
              <S.DefaultImage
                src={previewFile}
                alt="유저 프로필"
                onClick={pickImageHandler}
                fill={true}
                sizes="(max-width: 500px) 50vw, 100vw"
              />
            </S.ImageBox>
          ) : (
            <S.ImageBox>
              <S.DefaultImage
                src={userData?.foundUser.profileImg}
                alt="기본 프로필"
                onClick={pickImageHandler}
                fill={true}
                sizes="(max-width: 500px) 50vw, 100vw"
              />
            </S.ImageBox>
          )}
          <input
            ref={filePickerRef}
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={pickedHandler}
            style={{ display: "none" }}
          />
          <SettingsProfileChangeInput
            value={updateName || ""}
            onChangeHandler={changeName}
            max={6}
          >
            닉네임
          </SettingsProfileChangeInput>
          <SettingsProfileChangeInput
            placeHolder={userData?.foundUser.email}
            disabled={true}
          >
            이메일
          </SettingsProfileChangeInput>
          <S.ButtonBox>
            <UserFlowButton
              title="수정하기"
              isComplete={true}
              handler={askModalHandler}
            />
          </S.ButtonBox>
        </S.LogoMainBox>
      </S.LogoMain>
    </>
  );
};
export default ProfilePresenter;
