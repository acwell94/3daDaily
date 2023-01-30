"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SignUpPresenter from "./SignUpPresenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
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
  const [isComplete, setIsComplete] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { name, email, password, passwordConfirm } = watch();

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      passwordConfirm &&
      formState &&
      !formState.errors.name &&
      !formState.errors.email &&
      !formState.errors.password &&
      !formState.errors.passwordConfirm
    ) {
      setIsComplete((prev) => !prev);
    } else {
      setIsComplete((prev) => !prev);
    }
  }, [
    name &&
      email &&
      password &&
      passwordConfirm &&
      formState &&
      !formState.errors.name &&
      !formState.errors.email &&
      !formState.errors.password &&
      !formState.errors.passwordConfirm,
  ]);

  const signUpHandler = (data: FormValue) => {
    console.log("1");
    // api요청 signup
  };

  return (
    <SignUpPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      signUpHandler={signUpHandler}
      isComplete={isComplete}
    />
  );
};

export default SignUpContainer;
