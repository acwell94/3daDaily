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
  const router = useRouter();
  const [accessToken, setAccessToken] =
    useRecoilState<ILogin>(accessTokenState);
  const { register, handleSubmit } = useForm<IFormValue>({
    mode: "onChange",
  });
  console.log(accessToken);
  const errorModalHandler = useCallback(() => {
    setErrorModalVisible((prev) => !prev);
  }, []);

  const signInHandler = async (form: IFormValue) => {
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
        JSON.stringify({ userId: data.userId, email: data.email }),
      );
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
      setAccessToken({
        userId: data.userId,
        email: data.email,
        accessToken: data.token,
        refreshToken: data.refreshToken,
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
