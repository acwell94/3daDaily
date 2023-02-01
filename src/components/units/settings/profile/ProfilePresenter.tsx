import LogoItem from "@src/components/commons/items/logoItem";
import { LogoMainBox } from "@src/components/commons/styles/commonStyles";
import SettingsTitle from "@src/components/commons/title/settingsTitle";
import { LogoMain } from "../../myPage/MyPageStyles";
import * as S from "./ProfileStyles";
import ProfileForm from "../../../../../public/icon/profileForm.png";
import SettingsProfileChangeInput from "@src/components/commons/items/settingsProfileChangeInput";
import UserFlowButton from "@src/components/commons/button/userFlowButton";
const ProfilePresenter = () => {
  return (
    <LogoMain>
      <LogoMainBox>
        <LogoItem />
        <SettingsTitle>프로필 관리</SettingsTitle>
        <S.ProfileFormImg src={ProfileForm} alt="프로필 변경" />
        <SettingsProfileChangeInput placeHolder="민영">
          닉네임
        </SettingsProfileChangeInput>
        <SettingsProfileChangeInput
          placeHolder="leminyoung@naver.com"
          disabled={true}
        >
          이메일
        </SettingsProfileChangeInput>
        <S.ButtonBox>
          <UserFlowButton title="수정하기" />
        </S.ButtonBox>
      </LogoMainBox>
    </LogoMain>
  );
};
export default ProfilePresenter;
