"use client";
import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import WritePresenter from "./WritePresenter";

interface ILocal {
  email: string;

  userId: string;
}
interface IProps {
  isEdit?: boolean;
}

const WriteContainer = ({ isEdit }: IProps) => {
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
  // const [writeState, setWriteState] = useRecoilState(writeFormState);
  const [writeState, setWriteState] = useState({
    title: "",
    firstContents: "",
    secondContents: "",
    thirdContents: "",
    date: `${new Date()}`,
    weather: "",
    address: "",
    location: {
      lat: 37.5666805,
      lng: 126.9784147,
    },
    withWhom: "",
    what: "",
    feeling: "",
    image: "",
  });

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
  const getDetail = async (token: string) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}contents/detail/${router.query.storyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const handleScroll = (e: any) => {
  //     e.preventDefault();

  //     const innerHeight = window.innerHeight;
  //     const currentPageScroll = window.scrollY;

  //     if (e.deltaY > 0) {
  //       // 스크롤 내릴 때
  //       if (currentPageScroll < innerHeight - 2) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll +
  //               weatherRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight - 4 &&
  //         currentPageScroll < innerHeight * 2
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whereRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight * 2 - 4 &&
  //         currentPageScroll < innerHeight * 3
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whoRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight * 3 - 4 &&
  //         currentPageScroll < innerHeight * 4
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whatRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight * 4 - 4 &&
  //         currentPageScroll < innerHeight * 5
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + feelRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight * 5 - 4 &&
  //         currentPageScroll < innerHeight * 6
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll +
  //               pictureRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll >= innerHeight * 6 - 4 &&
  //         currentPageScroll < innerHeight * 7
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + dailyRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       }
  //     } else {
  //       if (
  //         currentPageScroll > innerHeight &&
  //         currentPageScroll < innerHeight * 2
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + dateRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 2 &&
  //         currentPageScroll < innerHeight * 3
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll +
  //               weatherRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 3 &&
  //         currentPageScroll < innerHeight * 4
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whereRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 4 &&
  //         currentPageScroll < innerHeight * 5
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whoRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 5 &&
  //         currentPageScroll < innerHeight * 6
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + whatRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 6 &&
  //         currentPageScroll < innerHeight * 7
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll + feelRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       } else if (
  //         currentPageScroll > innerHeight * 7 &&
  //         currentPageScroll < innerHeight * 8
  //       ) {
  //         window.scroll({
  //           top: Math.ceil(
  //             currentPageScroll +
  //               pictureRef.current.getBoundingClientRect().top,
  //           ),
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   };
  //   window.addEventListener("wheel", handleScroll, { passive: false });
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (isEdit) {
      getDetail(JSON.parse(accessToken)).then((res) => {
        setWriteState({
          title: res?.foundData.title,
          firstContents: res?.foundData.firstContents,
          secondContents: res?.foundData.secondContents,
          thirdContents: res?.foundData.thirdContents,
          date: res?.foundData.originDate || new Date(),
          weather: res?.foundData.weather,
          address: res?.foundData.address,
          location: {
            lat: res?.foundData.location?.lat
              ? res?.foundData.location.lat
              : 37.5666805,
            lng: res?.foundData.location?.lng
              ? res?.foundData.location.lng
              : 126.9784147,
          },
          withWhom: res?.foundData.withWhom,
          what: res?.foundData.what,
          feeling: res?.foundData.feeling,
          image: res?.foundData.image,
        });
      });
    }
  }, [router.query]);

  const changeDateHandler = useCallback(
    (dates: Date) => {
      setWriteState((prev) => ({ ...prev, date: String(dates) }));
    },
    [writeState.date],
  );
  const changeDailyHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>, name: string) => {
      if (e.target.value.length > 30) {
        e.target.value = e.target.value.substring(0, 30);
      } else {
        setWriteState((prev) => ({ ...prev, [name]: e.target.value }));
      }
    },
    [
      writeState.title,
      writeState.firstContents,
      writeState.secondContents,
      writeState.thirdContents,
    ],
  );
  const changeSelectImgHandler = (name: string, id: string) => {
    setWriteState((prev) => ({ ...prev, [name]: id }));
  };

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
    let errorRef;

    if (!writeState.weather) {
      errorRef = weatherRef;
    }
    // else if (!writeState.address) {
    //   errorRef = whereRef;
    // }
    else if (!writeState.withWhom) {
      errorRef = whoRef;
    } else if (!writeState.what) {
      errorRef = whatRef;
    } else if (!writeState.feeling) {
      errorRef = feelRef;
    }
    // else if (!writeState.image) {
    //   errorRef = pictureRef;
    // }
    else if (
      !writeState.title
      // ||
      // !writeState.firstContents ||
      // !writeState.secondContents ||
      // !writeState.thirdContents
    ) {
      errorRef = dailyRef;
    }

    if (errorRef !== undefined) {
      errorRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

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
      await axios.post(`${process.env.NEXT_PUBLIC_API}contents`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      router.push(`/mypage/${userData?.userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  const editContentsHandler = async () => {
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

      await axios.patch(
        `${process.env.NEXT_PUBLIC_API}contents/${router.query.storyId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      router.push(`/mypage/${userData?.userId}`);
    } catch (err) {
      console.log(err);
    }
  };

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
      userId={userData?.userId}
      isEdit={isEdit}
      editContentsHandler={editContentsHandler}
    />
  );
};

export default WriteContainer;
