import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import { KeyboardEvent } from "react";

import * as S from "./RestPasswordStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  formState: any;
  resetPasswordHandler: () => void;
}

const RestPasswordPresenter = ({
  register,
  handleSubmit,
  formState,
  resetPasswordHandler,
}: IProps) => {
  const checkKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") e.preventDefault();
  };
  return (
    <CommonMain>
      <CommonMainBox>
        <UserFlowTitle title="비밀번호 재설정" />
        <form
          onSubmit={handleSubmit(resetPasswordHandler)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <S.InputBox>
            <UserFlowInput
              type="password"
              name="password"
              placeholder="현재 비밀번호"
              register={register}
              error={formState.errors.password?.message}
            />
            <UserFlowInput
              type="password"
              name="newPassword"
              placeholder="새로운 비밀번호"
              register={register}
              error={formState.errors.newPassword?.message}
            />
            <UserFlowInput
              type="password"
              name="newPasswordConfirm"
              placeholder="새로운 비밀번호 확인"
              register={register}
              error={formState.errors.newPasswordConfirm?.message}
            />
          </S.InputBox>
          <UserFlowButton
            type="submit"
            title="비밀번호 변경"
            isComplete={true}
          />
        </form>
      </CommonMainBox>
    </CommonMain>
  );
};

export default RestPasswordPresenter;
