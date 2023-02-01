import LogoItem from "@src/components/commons/items/logoItem";
import SettingsBox from "@src/components/commons/items/settingsBox";
import { LogoMainBox } from "@src/components/commons/styles/commonStyles";
import SettingsTitle from "@src/components/commons/title/settingsTitle";
import { LogoMain } from "../myPage/MyPageStyles";
import Profile from "../../../../public/icon/settingProfile.png";
import Friend from "../../../../public/icon/settingFriend.png";
import Password from "../../../../public/icon/settingPassword.png";

const SettingsPresenter = () => {
  return (
    <LogoMain>
      <LogoMainBox>
        <LogoItem />
        <SettingsTitle>설정페이지</SettingsTitle>
        <SettingsBox src={Profile} handler={() => {}}>
          프로필 관리
        </SettingsBox>
        <SettingsBox src={Friend} handler={() => {}}>
          친구 관리
        </SettingsBox>
        <SettingsBox src={Password} handler={() => {}}>
          비밀번호 재설정
        </SettingsBox>
      </LogoMainBox>
    </LogoMain>
  );
};
export default SettingsPresenter;
