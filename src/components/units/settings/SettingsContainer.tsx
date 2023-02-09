import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import SettingsPresenter from "./SettingsPresenter";

const SettingsContainer = () => {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [askModalVisible, setAskModalVisible] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("data");
    setUserData(JSON.parse(data));
  }, []);

  const modalHandler = () => {
    setAskModalVisible((prev) => !prev);
  };

  const logoutHandler = useCallback(() => {
    try {
      localStorage.removeItem("data");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.push("/signin");
    } catch (err) {
      console.log(err);
    }
  }, [askModalVisible]);

  return (
    <SettingsPresenter
      userData={userData}
      askModalVisible={askModalVisible}
      modalHandler={modalHandler}
      logoutHandler={logoutHandler}
    />
  );
};
export default SettingsContainer;
