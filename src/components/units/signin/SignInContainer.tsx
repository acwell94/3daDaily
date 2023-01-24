"use client";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
  const router = useRouter();
  const [emailErrorModalVisible, setEmailErrorModalVisible] = useState(false);
  const [passwordErrorModalVisible, setPasswordErrorModalVisible] =
    useState(false);
  const emailModalHandler = useCallback(() => {
    setEmailErrorModalVisible((prev) => !prev);
  }, []);
  const passwordModalHandler = useCallback(() => {
    setPasswordErrorModalVisible((prev) => !prev);
  }, []);

  const linkHandler = (url: string) => {
    router.push(url);
  };

  return (
    <SignInPresenter
      linkHandler={linkHandler}
      emailModalHandler={emailModalHandler}
      emailErrorModalVisible={emailErrorModalVisible}
      passwordModalHandler={passwordModalHandler}
      passwordErrorModalVisible={passwordErrorModalVisible}
    />
  );
};

export default SignInContainer;
