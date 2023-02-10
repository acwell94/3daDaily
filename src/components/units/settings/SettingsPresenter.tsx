import LogoItem from "@src/components/commons/items/logoItem";
import SettingsBox from "@src/components/commons/items/settingsBox";
import { LogoMainBox } from "@src/components/commons/styles/commonStyles";
import SettingsTitle from "@src/components/commons/title/settingsTitle";
import { LogoMain } from "../myPage/MyPageStyles";
import Profile from "../../../../public/icon/settingProfile.png";
import Friend from "../../../../public/icon/settingFriend.png";
import Password from "../../../../public/icon/settingPassword.png";
import LogoutImg from "../../../../public/icon/logoutImg.png";
import WithDrawerImg from "../../../../public/icon/withDrawer.png";
import useLink from "@src/components/commons/hooks/useLink";
import AskModal from "@src/components/commons/modal/askModal";
import ConfirmModal from "@src/components/commons/modal/confirmModal";
interface IProps {
  userData: {
    userId: string;
    email: string;
    name: string;
  };
  logoutAskModalVisible: boolean;
  logoutModalHandler: () => void;
  logoutHandler: () => void;
  withDrawAskModalVisible: boolean;
  withDrawAskModalHandler: () => void;
  withDrawConfirmModalVisible: boolean;
  withDrawConfirmModalHandler: () => void;
  withDrawUserHandler: () => void;
}

const SettingsPresenter = ({
  userData,
  logoutAskModalVisible,
  logoutModalHandler,
  logoutHandler,
  withDrawAskModalVisible,
  withDrawAskModalHandler,
  withDrawConfirmModalVisible,
  withDrawConfirmModalHandler,
  withDrawUserHandler,
}: IProps) => {
  return (
    <>
      <AskModal
        isVisible={logoutAskModalVisible}
        title="로그아웃 하시겠습니까?"
        cancelHandler={logoutModalHandler}
        successHandler={logoutHandler}
      />
      <AskModal
        isVisible={withDrawAskModalVisible}
        title="정말로 삼다일기를 탈퇴하시겠습니까?"
        warning="작성된 모든 글이 사라집니다."
        cancelHandler={withDrawAskModalHandler}
        successHandler={withDrawUserHandler}
      />
      <ConfirmModal
        isVisible={withDrawConfirmModalVisible}
        title="삼다일기를 이용해 주셔서 감사합니다."
        handler={withDrawConfirmModalHandler}
        buttonTitle="확인"
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
          <SettingsBox src={LogoutImg} handler={logoutModalHandler}>
            로그아웃
          </SettingsBox>
          <SettingsBox src={WithDrawerImg} handler={withDrawAskModalHandler}>
            회원탈퇴
          </SettingsBox>
        </LogoMainBox>
      </LogoMain>
    </>
  );
};
export default SettingsPresenter;
