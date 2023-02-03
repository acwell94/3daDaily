"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "store";
import SignInPresenter from "./SignInPresenter";

interface FormValue {
  email: string;
  password: string;
}

export interface ILogin {
  userId: string;
  email: string;
  accessToken: string;
}

const SignInContainer = () => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const [accessToken, setAccessToken] =
    useRecoilState<ILogin>(accessTokenState);
  const { register, handleSubmit } = useForm<FormValue>({
    mode: "onChange",
  });

  const errorModalHandler = useCallback(() => {
    setErrorModalVisible((prev) => !prev);
  }, []);

  const signInHandler = async (form: FormValue) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/login`,
        {
          email: form.email,
          password: form.password,
        },
      );
      setAccessToken({
        userId: data.userId,
        email: data.email,
        accessToken: data.token,
      });
      router.push(`/mypage/${data.userId}`);
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message);
      errorModalHandler();
    }
  };

  return (
    <SignInPresenter
      register={register}
      handleSubmit={handleSubmit}
      signInHandler={signInHandler}
      errorModalHandler={errorModalHandler}
      errorModalVisible={errorModalVisible}
      errorMsg={errorMsg}
    />
  );
};

export default SignInContainer;
