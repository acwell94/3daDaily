"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FindIdPresenter from "./FindIdPresenter";
import * as yup from "yup";
import axios from "axios";
const schema = yup.object({
  name: yup
    .string()
    .min(2, "이름은 최소 2글자 이상입니다.")
    .max(6, "이름은 최대 6글자 입니다.")
    .required("이름은 필수 입력 사항입니다."),
});

interface FormValue {
  name: string;
}

interface ResultData {
  foundUser: [
    {
      _id: string;
      name: string;
      email: string;
      profileImg: string;
    },
  ];
}

const FindIdContainer = () => {
  const [result, setResult] = useState<ResultData | any>();
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const findNameHandler = async (form: FormValue) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/findId`,
        {
          name: form.name,
        },
      );

      setResult(data);
    } catch (err: any) {
      setErrorModalVisible((prev) => !prev);
    }
  };
  const errorModalHandler = () => {
    setErrorModalVisible((prev) => !prev);
  };

  return (
    <FindIdPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      findNameHandler={findNameHandler}
      errorModalVisible={errorModalVisible}
      errorModalHandler={errorModalHandler}
      result={result}
    />
  );
};

export default FindIdContainer;
