import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import SettingsPresenter from "./SettingsPresenter";

interface ILocal {
  email: string;
  name: string;
  userId: string;
}

const SettingsContainer = () => {
  useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<ILocal>();
  const [logoutAskModalVisible, setLogoutAskModalVisible] = useState(false);
  const [withDrawAskModalVisible, setWithDrawAskModalVisible] = useState(false);
  const [withDrawConfirmModalVisible, setWithDrawConfirmModalVisible] =
    useState(false);
  useEffect(() => {
    const data = localStorage.getItem("data");
    setUserData(JSON.parse(data));
  }, []);

  const logoutModalHandler = () => {
    setLogoutAskModalVisible((prev) => !prev);
  };

  const logoutHandler = useCallback(() => {
    try {
      localStorage.removeItem("data");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  }, [logoutAskModalVisible]);

  const withDrawAskModalHandler = useCallback(() => {
    setWithDrawAskModalVisible((prev) => !prev);
  }, [withDrawAskModalVisible]);

  const withDrawConfirmModalHandler = useCallback(() => {
    setWithDrawConfirmModalVisible((prev) => !prev);
    router.replace("/signin");
  }, [withDrawAskModalVisible]);

  const withDrawUserHandler = useCallback(async () => {
    const storedData = localStorage.getItem("accessToken");
    console.log(storedData);
    try {
      setWithDrawAskModalVisible((prev) => !prev);
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API}users/${userData.userId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(storedData)}`,
          },
        },
      );
      localStorage.removeItem("data");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setWithDrawConfirmModalVisible((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  }, [userData]);

  return (
    <SettingsPresenter
      userData={userData}
      logoutAskModalVisible={logoutAskModalVisible}
      logoutModalHandler={logoutModalHandler}
      logoutHandler={logoutHandler}
      withDrawAskModalVisible={withDrawAskModalVisible}
      withDrawAskModalHandler={withDrawAskModalHandler}
      withDrawConfirmModalVisible={withDrawConfirmModalVisible}
      withDrawConfirmModalHandler={withDrawConfirmModalHandler}
      withDrawUserHandler={withDrawUserHandler}
    />
  );
};
export default SettingsContainer;
