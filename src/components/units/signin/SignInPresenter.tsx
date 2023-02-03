"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import useLink from "@src/components/commons/hooks/useLink";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import * as S from "./SignInStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  signInHandler: (data: any) => void;
  errorModalHandler: () => void;
  errorModalVisible: boolean;
  errorMsg: string;
}

const SignInPresenter = ({
  register,
  handleSubmit,
  signInHandler,
  errorModalHandler,
  errorModalVisible,
  errorMsg,
}: IProps) => {
  return (
    <CommonMain>
      <CommonMainBox>
        <ConfirmModal
          title={errorMsg}
          isVisible={errorModalVisible}
          handler={errorModalHandler}
          buttonTitle="확인"
        />

        <UserFlowTitle title="로그인" />
        <form onSubmit={handleSubmit(signInHandler)}>
          <S.InputBox>
            <UserFlowInput
              type="text"
              placeholder="이메일"
              register={register("email")}
            />
            <UserFlowInput
              type="password"
              placeholder="비밀번호"
              register={register("password")}
            />
          </S.InputBox>

          <UserFlowButton type="submit" title="로그인" isComplete={true} />
          <S.UserSelectBox>
            <S.UserSelectText onClick={useLink("/findId")}>
              아이디 찾기
            </S.UserSelectText>
            <S.SignUpText onClick={useLink("/signup")}>
              이메일 회원가입
            </S.SignUpText>
          </S.UserSelectBox>
        </form>
      </CommonMainBox>
    </CommonMain>
  );
};

export default SignInPresenter;
