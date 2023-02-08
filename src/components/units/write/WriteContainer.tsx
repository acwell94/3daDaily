"use client";
import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { writeFormState } from "store";
import WritePresenter from "./WritePresenter";

interface ILocal {
  email: string;

  userId: string;
}

const WriteContainer = () => {
  useAuth();
  const dateRef = useRef<HTMLInputElement>(null);
  const weatherRef = useRef<HTMLInputElement>(null);
  const whereRef = useRef<HTMLInputElement>(null);
  const whoRef = useRef<HTMLInputElement>(null);
  const whatRef = useRef<HTMLInputElement>(null);
  const feelRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const dailyRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [writeState, setWriteState] = useRecoilState(writeFormState);
  const [userData, setUserData] = useState<ILocal>();
  const [token, setToken] = useState<string>();
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const accessToken = localStorage.getItem("accessToken");
    if (storedData) {
      setUserData(JSON.parse(storedData));
      setToken(accessToken);
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
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      console.log(data);
      router.push(`/mypage/${userData?.userId}`);
    } catch (err) {
      console.log(err);
      let errorRef;
      if (
        !writeState.title ||
        !writeState.firstContents ||
        !writeState.secondContents ||
        !writeState.thirdContents
      ) {
        errorRef = dailyRef;
      } else if (!writeState.weather) {
        errorRef = weatherRef;
      } else if (!writeState.address) {
        errorRef = whereRef;
      } else if (!writeState.withWhom) {
        errorRef = whoRef;
      } else if (!writeState.what) {
        errorRef = whatRef;
      } else if (!writeState.feeling) {
        errorRef = feelRef;
      } else if (!writeState.image) {
        errorRef = pictureRef;
      }
      errorRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  console.log(writeState);
  return (
    <WritePresenter
      dateRef={dateRef}
      weatherRef={weatherRef}
      whereRef={whereRef}
      whoRef={whoRef}
      whatRef={whatRef}
      feelRef={feelRef}
      pictureRef={pictureRef}
      dailyRef={dailyRef}
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
