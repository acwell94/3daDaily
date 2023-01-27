"use client";

import { useCallback, useState } from "react";
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
  const [emailErrorModalVisible, setEmailErrorModalVisible] = useState(false);
  const [passwordErrorModalVisible, setPasswordErrorModalVisible] =
    useState(false);
  const emailModalHandler = useCallback(() => {
    setEmailErrorModalVisible((prev) => !prev);
  }, []);
  const passwordModalHandler = useCallback(() => {
    setPasswordErrorModalVisible((prev) => !prev);
  }, []);

  return (
    <SignInPresenter
      emailModalHandler={emailModalHandler}
      emailErrorModalVisible={emailErrorModalVisible}
      passwordModalHandler={passwordModalHandler}
      passwordErrorModalVisible={passwordErrorModalVisible}
    />
  );
};

export default SignInContainer;
