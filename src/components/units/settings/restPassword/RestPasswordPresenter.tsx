import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import { KeyboardEvent } from "react";
import { FormValue } from "./RestPasswordContainer";

import * as S from "./RestPasswordStyles";

interface IProps {
  register: any;
  handleSubmit: any;
  formState: any;
  resetPasswordHandler: (form: FormValue) => void;
  failModalVisible: boolean;
  failModalHandler: () => void;
  errorText: string;
  successModalVisible: boolean;
  successModalHandler: () => void;
  loading: boolean;
}

const RestPasswordPresenter = ({
  register,
  handleSubmit,
  formState,
  resetPasswordHandler,
  failModalVisible,
  failModalHandler,
  errorText,
  successModalVisible,
  successModalHandler,
  loading,
}: IProps) => {
  const checkKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") e.preventDefault();
  };
  return (
    <>
      <ConfirmModal
        isVisible={failModalVisible}
        title={errorText}
        handler={failModalHandler}
        buttonTitle="확인"
      />
      <ConfirmModal
        isVisible={successModalVisible}
        title={`비밀번호가 재설정 되었습니다.\n 다시 로그인 해주세요.`}
        handler={successModalHandler}
        buttonTitle="확인"
      />
      <CommonMain>
        <CommonMainBox>
          <UserFlowTitle title="비밀번호 재설정" />
          <form
            style={{ width: "100%" }}
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
              loading={loading}
            />
          </form>
        </CommonMainBox>
      </CommonMain>
    </>
  );
};

export default RestPasswordPresenter;
