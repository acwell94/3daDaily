"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import { ChangeEvent } from "react";
import * as S from "./FindIdStyles";

interface IProps {
  findNameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const FindIdPresenter = ({ findNameHandler, name }: IProps) => {
  return (
    <CommonMain>
      <CommonMainBox>
        <UserFlowTitle title="아이디 찾기" />
        <S.InputBox>
          <UserFlowInput
            placeholder="이름"
            inputHandler={(e) => findNameHandler(e)}
          />
        </S.InputBox>
        <UserFlowButton title="비밀번호 재설정" isComplete={!!name} />
      </CommonMainBox>
    </CommonMain>
  );
};

export default FindIdPresenter;
