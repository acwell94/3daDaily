"use client";
import * as yup from "yup";
import RestPasswordPresenter from "./RestPasswordPresenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "@src/components/commons/hooks/useAuth";
import { useRouter } from "next/router";
import axios from "axios";
import { useCallback, useState } from "react";

const schema = yup.object({
  password: yup.string().required("현재 비밀번호를 입력해 주세요."),
  newPassword: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상입니다.")
    .max(16, "비밀번호는 최대 16자리입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 반드시 8~16자이며, 영문, 숫자, 특수문자를 포함해야 합니다.",
    )
    .required("비밀번호는 필수 입력 사항입니다."),
  newPasswordConfirm: yup
    .string()
    .required("비밀번호 다시 입력해 주세요.")
    .oneOf([yup.ref("newPassword")], "비밀번호가 일치하지 않습니다."),
});
export interface FormValue {
  password: string;
  newPassword: string;
  newPasswordConfirm?: string;
}

const RestPasswordContainer = () => {
  useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [failModalVisible, setFailModalVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const resetPassword = async (form: FormValue) => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("data");

    try {
      const formData = new FormData();
      formData.append("password", form.password);
      formData.append("newPassword", form.newPassword);

      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API}users/resetPassword/${
          JSON.parse(userData).userId
        }`,
        {
          password: form.password,
          newPassword: form.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      setSuccessModalVisible((prev) => !prev);
    } catch (err: any) {
      console.log(err);
      setErrorText(err.response.data.message);
      setFailModalVisible((prev) => !prev);
    }
  };

  const successModalHandler = useCallback(() => {
    setSuccessModalVisible((prev) => !prev);
    localStorage.removeItem("data");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.replace("/signin");
  }, [resetPassword]);

  const failModalHandler = useCallback(() => {
    setFailModalVisible((prev) => !prev);
  }, [resetPassword]);

  return (
    <RestPasswordPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      resetPasswordHandler={resetPassword}
      failModalVisible={failModalVisible}
      failModalHandler={failModalHandler}
      errorText={errorText}
      successModalVisible={successModalVisible}
      successModalHandler={successModalHandler}
    />
  );
};

export default RestPasswordContainer;
