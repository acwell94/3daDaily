"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import * as S from "./SignUpStyles";
const SignUpPresenter = () => {
  return (
    <S.Main>
      <S.MainBox>
        <UserFlowTitle title="회원가입" />
        <S.InputBox>
          <UserFlowInput
            placeholder="닉네임(10자 이내)"
            error="닉네임은 2자 이상 입력해야 합니다."
          />
          <UserFlowInput
            placeholder="이메일"
            error="올바르지 않은 이메일 형식입니다."
          />
          <UserFlowInput placeholder="비밀번호" />
          <UserFlowInput
            placeholder="비밀번호 확인"
            error="입력된 비밀번호와 다릅니다."
            isLast={true}
          />
        </S.InputBox>
        <S.QuestionBox>
          <S.Question>이미 회원이신가요?</S.Question>
          <S.LinkToLogin>로그인하러가기</S.LinkToLogin>
        </S.QuestionBox>
        <UserFlowButton title="회원가입" isComplete={false} />
      </S.MainBox>
    </S.Main>
  );
};

export default SignUpPresenter;
