"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import useLink from "@src/components/commons/hooks/useLink";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ConfirmModal from "@src/components/commons/modal/confirmModal";

import {
  CommonFormBox,
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import { KeyboardEvent } from "react";
import fileUploadDefault from "../../../../public/icon/profileForm.png";

import * as S from "./SignUpStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  formState: any;
  signUpHandler: (data: any) => void;
  filePickerRef: any;
  previewFile: any;
  pickedHandler: any;
  pickImageHandler: any;
  errorConfirmModalVisible: boolean;
  errorText: string;
  errorConfirmModalHandler: () => void;
}

const SignUpPresenter = ({
  register,
  handleSubmit,
  formState,
  signUpHandler,
  filePickerRef,
  previewFile,
  pickedHandler,
  pickImageHandler,
  errorConfirmModalVisible,
  errorText,
  errorConfirmModalHandler,
}: IProps) => {
  const checkKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") e.preventDefault();
  };
  return (
    <>
      <ConfirmModal
        isVisible={errorConfirmModalVisible}
        title={errorText}
        handler={errorConfirmModalHandler}
        buttonTitle="확인"
      />
      <CommonMain>
        <CommonMainBox>
          <UserFlowTitle title="회원가입" />
          <CommonFormBox
            onSubmit={handleSubmit(signUpHandler)}
            onKeyDown={(e) => checkKeyDown(e)}
          >
            <S.InputBox>
              {previewFile ? (
                <S.ImageBox>
                  <S.DefaultImage
                    src={previewFile}
                    alt="유저 프로필"
                    onClick={pickImageHandler}
                    fill={true}
                  />
                </S.ImageBox>
              ) : (
                <S.ImageBox>
                  <S.DefaultImage
                    src={fileUploadDefault}
                    alt="기본 프로필"
                    onClick={pickImageHandler}
                    fill={true}
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

              <UserFlowInput
                type="text"
                name="name"
                register={register}
                placeholder="닉네임(10자 이내)"
                error={formState.errors.name?.message}
              />
              <UserFlowInput
                type="text"
                name="email"
                register={register}
                placeholder="이메일"
                error={formState.errors.email?.message}
              />
              <UserFlowInput
                type="password"
                name="password"
                register={register}
                placeholder="비밀번호"
                error={formState.errors.password?.message}
              />
              <UserFlowInput
                type="password"
                name="passwordConfirm"
                register={register}
                placeholder="비밀번호 확인"
                error={formState.errors.passwordConfirm?.message}
                isLast={true}
              />
            </S.InputBox>
            <S.QuestionBox>
              <S.Question>이미 회원이신가요?</S.Question>
              <S.LinkToLogin onClick={useLink("/signin")}>
                로그인하러가기
              </S.LinkToLogin>
            </S.QuestionBox>

            <UserFlowButton type="submit" title="회원가입" isComplete={true} />
          </CommonFormBox>
        </CommonMainBox>
      </CommonMain>
    </>
  );
};

export default SignUpPresenter;
