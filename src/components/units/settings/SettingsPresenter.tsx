import LogoItem from "@src/components/commons/items/logoItem";
import SettingsBox from "@src/components/commons/items/settingsBox";
import { LogoMainBox } from "@src/components/commons/styles/commonStyles";
import SettingsTitle from "@src/components/commons/title/settingsTitle";
import { LogoMain } from "../myPage/MyPageStyles";
import Profile from "../../../../public/icon/settingProfile.png";
import Friend from "../../../../public/icon/settingFriend.png";
import Password from "../../../../public/icon/settingPassword.png";
import LogoutImg from "../../../../public/icon/logoutImg.png";
import useLink from "@src/components/commons/hooks/useLink";
import AskModal from "@src/components/commons/modal/askModal";

interface IProps {
  userData: {
    userId: string;
    email: string;
    name: string;
  };
  askModalVisible: boolean;
  modalHandler: () => void;
  logoutHandler: () => void;
}

const SettingsPresenter = ({
  userData,
  askModalVisible,
  modalHandler,
  logoutHandler,
}: IProps) => {
  return (
    <>
      <AskModal
        isVisible={askModalVisible}
        title="로그아웃 하시겠습니까?"
        cancelHandler={modalHandler}
        successHandler={logoutHandler}
      />
      <LogoMain>
        <LogoMainBox>
          <LogoItem />
          <SettingsTitle>설정페이지</SettingsTitle>
          <SettingsBox
            src={Profile}
            handler={useLink(`/settings/profile/${userData?.userId}`)}
          >
            프로필 관리
          </SettingsBox>
          <SettingsBox
            src={Friend}
            handler={useLink(`/settings/friend/${userData?.userId}`)}
          >
            친구 관리
          </SettingsBox>
          <SettingsBox
            src={Password}
            handler={useLink(`/settings/resetpassword/${userData?.userId}`)}
          >
            비밀번호 재설정
          </SettingsBox>
          <SettingsBox src={LogoutImg} handler={modalHandler}>
            로그아웃
          </SettingsBox>
        </LogoMainBox>
      </LogoMain>
    </>
  );
};
export default SettingsPresenter;
