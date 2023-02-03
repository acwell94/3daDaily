"use client";
import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { writeFormState } from "store";
import WritePresenter from "./WritePresenter";

const WriteContainer = () => {
  const [writeState, setWriteState] = useRecoilState(writeFormState);

  const changeDateHandler = useCallback(
    (dates: Date) => {
      setWriteState((prev) => ({ ...prev, date: dates }));
    },
    [writeState.date],
  );
  const changeDailyHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>, name: string) => {
      setWriteState((prev) => ({ ...prev, [name]: e.target.value }));
    },
    [
      writeState.title,
      writeState.firstContents,
      writeState.secondContents,
      writeState.thirdContents,
    ],
  );
  const changeSelectImgHandler = useCallback(
    (e: MouseEvent<HTMLDivElement>, name: string) => {
      setWriteState((prev) => ({ ...prev, [name]: e.currentTarget.id }));
    },
    [
      writeState.weather,
      writeState.withWhom,
      writeState.what,
      writeState.feeling,
    ],
  );
  const changeLocationHandler = useCallback(
    (address: string) => {
      setWriteState((prev) => ({ ...prev, address: address }));
    },
    [writeState.address],
  );

  const changePictureHandler = useCallback(
    (image: any) => {
      setWriteState((prev) => ({ ...prev, image: image }));
    },
    [writeState.image],
  );

  console.log(writeState);
  return (
    <WritePresenter
      currentData={writeState}
      changeDateHandler={changeDateHandler}
      changeSelectImgHandler={changeSelectImgHandler}
      changeLocationHandler={changeLocationHandler}
      changeDailyHandler={changeDailyHandler}
      changePictureHandler={changePictureHandler}
    />
  );
};

export default WriteContainer;
