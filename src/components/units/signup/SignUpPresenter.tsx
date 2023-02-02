"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import useLink from "@src/components/commons/hooks/useLink";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ImageUpload from "@src/components/commons/items/imageUpload";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import Link from "next/link";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./SignUpStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  formState: any;
  signUpHandler: (data: any) => void;
}

const SignUpPresenter = ({
  register,
  handleSubmit,
  formState,
  signUpHandler,
}: IProps) => {
  return (
    <CommonMain>
      <CommonMainBox>
        <UserFlowTitle title="회원가입" />
        <form onSubmit={handleSubmit(signUpHandler)}>
          <S.InputBox>
            <ImageUpload />
            <UserFlowInput
              type="text"
              register={register("name")}
              placeholder="닉네임(10자 이내)"
              error={formState.errors.name?.message}
            />
            <UserFlowInput
              type="text"
              register={register("email")}
              placeholder="이메일"
              error={formState.errors.email?.message}
            />
            <UserFlowInput
              type="password"
              register={register("password")}
              placeholder="비밀번호"
              error={formState.errors.password?.message}
            />
            <UserFlowInput
              type="password"
              register={register("passwordConfirm")}
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
        </form>
      </CommonMainBox>
    </CommonMain>
  );
};

export default SignUpPresenter;
