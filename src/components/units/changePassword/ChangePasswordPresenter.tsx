import UserFlowButton from "@src/components/commons/button/userFlowButton";
import UserFlowInput from "@src/components/commons/inputs/userFlowInput";
import {
  CommonMain,
  CommonMainBox,
} from "@src/components/commons/styles/commonStyles";
import UserFlowTitle from "@src/components/commons/title/userFlowTitle";
import * as S from "./ChangePasswordStyles";
const ChangePasswordPresenter = () => {
  return (
    <CommonMain>
      <CommonMainBox>
        <UserFlowTitle title="비밀번호 재설정" />
        <S.InputBox>
          <UserFlowInput
            isLast={true}
            placeholder="이메일"
            error="일치하는 정보가 없습니다. 다시 입력해 주세요."
          />
        </S.InputBox>
        <UserFlowButton title="비밀번호 재설정" />
      </CommonMainBox>
    </CommonMain>
  );
};

export default ChangePasswordPresenter;
