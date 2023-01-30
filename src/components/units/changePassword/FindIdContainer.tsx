"use client";
import { ChangeEvent, useState } from "react";
import FindIdPresenter from "./FindIdPresenter";

const FindIdContainer = () => {
  const [name, setName] = useState("");

  const findNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return <FindIdPresenter findNameHandler={findNameHandler} name={name} />;
};

export default FindIdContainer;
