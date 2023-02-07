"use client";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import { ChangeEvent, KeyboardEvent } from "react";
import * as S from "./FindIdStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  formState: any;
  findNameHandler: (data: { name: string }) => void;
  errorModalVisible: boolean;
  errorModalHandler: () => void;
  result: {
    foundUser: [
      {
        _id: string;
        name: string;
        email: string;
        profileImg: string;
      },
    ];
  };
}

const FindIdPresenter = ({
  findNameHandler,
  register,
  handleSubmit,
  formState,
  errorModalVisible,
  errorModalHandler,
  result,
}: IProps) => {
  const checkKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") e.preventDefault();
  };
  return (
    <CommonMain>
      <ConfirmModal
        title="아이디가 없습니다."
        isVisible={errorModalVisible}
        handler={errorModalHandler}
        buttonTitle="확인"
      />
      <CommonMainBox>
        <UserFlowTitle title="아이디 찾기" />
        <form
          onSubmit={handleSubmit(findNameHandler)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <S.InputBox>
            <UserFlowInput
              type="text"
              register={register}
              name="name"
              placeholder="이름"
              error={formState.errors.name?.message}
            />
          </S.InputBox>
          <UserFlowButton type="submit" title="아이디 찾기" isComplete={true} />
        </form>
        {result && (
          <S.ResultBox>
            <S.ResultTitle>검색 결과</S.ResultTitle>
            {result?.foundUser.map((el) => (
              <S.Result key={el._id}>
                <S.ResultProfileBox>
                  <S.ResultProfile
                    src={`http://localhost:5000/${el.profileImg}`}
                    alt="userProfile"
                    fill={true}
                  />
                </S.ResultProfileBox>
                <S.ResultName>{el.name}</S.ResultName>
                <S.ResultEmail>{el.email}</S.ResultEmail>
              </S.Result>
            ))}
          </S.ResultBox>
        )}
      </CommonMainBox>
    </CommonMain>
  );
};

export default FindIdPresenter;
