"use client";

import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "store";
import SignInPresenter from "./SignInPresenter";

interface IFormValue {
  email: string;
  password: string;
}

export interface ILogin {
  userId: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

const SignInContainer = () => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [_, setAccessToken] = useRecoilState<ILogin>(accessTokenState);
  const { register, handleSubmit } = useForm<IFormValue>({
    mode: "onChange",
  });

  const errorModalHandler = useCallback(() => {
    setErrorModalVisible((prev) => !prev);
  }, []);

  const signInHandler = async (form: IFormValue) => {
    setLoading((prev) => !prev);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/login`,
        {
          email: form.email,
          password: form.password,
        },
      );
      localStorage.setItem(
        "data",
        JSON.stringify({
          userId: data.userId,
          email: data.email,
          name: data.name,
        }),
      );
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
      setAccessToken({
        userId: data.userId,
        email: data.email,
        accessToken: data.token,
        refreshToken: data.refreshToken,
      });
      setLoading((prev) => !prev);
      router.replace(`/mypage/${data.userId}`);
    } catch (error: any) {
      setLoading((prev) => !prev);
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
      loading={loading}
    />
  );
};

export default SignInContainer;
