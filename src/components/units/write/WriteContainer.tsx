"use client";
import axios from "axios";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { writeFormState } from "store";
import WritePresenter from "./WritePresenter";

const WriteContainer = () => {
  const [writeState, setWriteState] = useRecoilState(writeFormState);
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setToken(JSON.parse(storedData).token);
    }
  }, []);
  // console.log(writeState);
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

  const createContentsHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("title", writeState.title);
      formData.append("firstContents", writeState.firstContents);
      formData.append("secondContents", writeState.secondContents);
      formData.append("thirdContents", writeState.thirdContents);
      formData.append("date", String(writeState.date));
      formData.append("weather", writeState.weather);
      formData.append("address", writeState.address);
      formData.append("withWhom", writeState.withWhom);
      formData.append("what", writeState.what);
      formData.append("feeling", writeState.feeling);
      formData.append("image", writeState.image);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}contents`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(writeState);
  return (
    <WritePresenter
      currentData={writeState}
      changeDateHandler={changeDateHandler}
      changeSelectImgHandler={changeSelectImgHandler}
      changeLocationHandler={changeLocationHandler}
      changeDailyHandler={changeDailyHandler}
      changePictureHandler={changePictureHandler}
      createContentsHandler={createContentsHandler}
    />
  );
};

export default WriteContainer;
