"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import Image from "next/image";
import Welcome from "../../../../../public/welcome.png";
import * as S from "./SignUpCompleteStyles";
const SignUpCompletePresenter = () => {
  return (
    <CommonMain>
      <CommonMainBox>
        <UserFlowTitle title="회원가입 완료" />
        <S.DescriptionBox>
          <S.Description>이아롱님, 삼다일기 가입을 축하합니다.</S.Description>
          <S.Description>
            로그인후 나만의 소중한 일상을 기록해 보세요.
          </S.Description>
        </S.DescriptionBox>
        <Image
          width={300}
          height={200}
          style={{ marginBottom: "40px" }}
          src={Welcome}
          alt="user profile picture"
        />
        <UserFlowButton title="시작하기" isComplete={true} />
      </CommonMainBox>
    </CommonMain>
  );
};

export default SignUpCompletePresenter;
