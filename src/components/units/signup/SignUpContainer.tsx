"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SignUpPresenter from "./SignUpPresenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";

import useFileUpload from "@src/components/commons/hooks/useFileUpload";
import fileUploadDefault from "../../../../public/icon/profileForm.png";
import axios from "axios";
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상입니다.")
    .max(16, "비밀번호는 최대 16자리입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 반드시 8~16자이며, 영문, 숫자, 특수문자를 포함해야 합니다.",
    )
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup
    .string()
    .required("비밀번호 다시 입력해 주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  name: yup
    .string()
    .min(2, "이름은 최소 2글자 이상입니다.")
    .max(6, "이름은 최대 6글자 입니다.")
    .required("이름은 필수 입력 사항입니다."),
});
interface FormValue {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
}
const SignUpContainer = () => {
  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const filePickerRef = useRef<any>();
  const { file, previewFile, pickedHandler } = useFileUpload(fileUploadDefault);
  // console.log(file);
  const pickImageHandler = () => {
    if (!filePickerRef.current.click()) {
      return;
    }
    filePickerRef.current.click();
  };

  const signUpHandler = async (form: FormValue) => {
    console.log(form, "form");
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("profileImg", file);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/signup`,
        formData,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // },
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignUpPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      signUpHandler={signUpHandler}
      filePickerRef={filePickerRef}
      previewFile={previewFile}
      pickedHandler={pickedHandler}
      pickImageHandler={pickImageHandler}
    />
  );
};

export default SignUpContainer;
