"use client";
import * as yup from "yup";
import { useEffect, useState } from "react";
import RestPasswordPresenter from "./RestPasswordPresenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
interface FormValue {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const RestPasswordContainer = () => {
  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const resetPassword = () => {};

  return (
    <RestPasswordPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      resetPasswordHandler={resetPassword}
    />
  );
};

export default RestPasswordContainer;
