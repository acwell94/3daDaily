"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignInPresenter from "./SignInPresenter";

interface FormValue {
  email: string;
  password: string;
}

const SignInContainer = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [emailErrorModalVisible, setEmailErrorModalVisible] = useState(false);
  const [passwordErrorModalVisible, setPasswordErrorModalVisible] =
    useState(false);

  const { register, handleSubmit, watch } = useForm<FormValue>({
    mode: "onChange",
  });

  const { email, password } = watch();

  useEffect(() => {
    if (email && password) {
      setIsComplete((prev) => !prev);
    }
  }, [email && password]);

  const emailModalHandler = useCallback(() => {
    setEmailErrorModalVisible((prev) => !prev);
  }, []);
  const passwordModalHandler = useCallback(() => {
    setPasswordErrorModalVisible((prev) => !prev);
  }, []);

  const signInHandler = (data: any) => {
    console.log(data);
  };

  return (
    <SignInPresenter
      register={register}
      handleSubmit={handleSubmit}
      signInHandler={signInHandler}
      emailModalHandler={emailModalHandler}
      emailErrorModalVisible={emailErrorModalVisible}
      passwordModalHandler={passwordModalHandler}
      passwordErrorModalVisible={passwordErrorModalVisible}
      isComplete={isComplete}
    />
  );
};

export default SignInContainer;
