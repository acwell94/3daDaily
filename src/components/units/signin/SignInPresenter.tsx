"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import * as S from "./SignInStyles";

interface IProps {
  linkHandler: (arg: string) => void;
  emailModalHandler: () => void;
  emailErrorModalVisible: boolean;
  passwordModalHandler: () => void;
  passwordErrorModalVisible: boolean;
}

const SignInPresenter = ({
  linkHandler,
  emailModalHandler,
  emailErrorModalVisible,
  passwordModalHandler,
  passwordErrorModalVisible,
}: IProps) => {
  return (
    <CommonMain>
      <CommonMainBox>
        <ConfirmModal
          title="이메일이 올바르지 않습니다."
          type="email"
          isVisible={emailErrorModalVisible}
          handler={emailModalHandler}
        />
        <ConfirmModal
          title="비밀번호가 올바르지 않습니다."
          type="password"
          isVisible={passwordErrorModalVisible}
          handler={passwordModalHandler}
        />
        <UserFlowTitle title="로그인" />
        <S.InputBox>
          <UserFlowInput
            placeholder="이메일"
            error="이메일은 2자 이상 입력해야 합니다."
          />
          <UserFlowInput
            placeholder="비밀번호"
            error="일치하는 정보가 없습니다. 다시 입력해주세요."
          />
        </S.InputBox>

        <UserFlowButton title="로그인" isComplete={false} />
        <S.UserSelectBox>
          <S.UserSelectText onClick={() => linkHandler("/changepassword")}>
            비밀번호 재설정
          </S.UserSelectText>
          <S.SignUpText onClick={() => linkHandler("/signup")}>
            이메일 회원가입
          </S.SignUpText>
        </S.UserSelectBox>
      </CommonMainBox>
    </CommonMain>
  );
};

export default SignInPresenter;
