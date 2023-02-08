"use client";
import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  useAuth();

  const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const [story, setStory] = useState();
  const router = useRouter();

  const chatBotHandler = () => {
    setIsChatBotVisible((prev) => !prev);
  };

  // const getContents =async (id:string) => {

  // }

  useEffect(() => {
    console.log("데이터 패치");
    const storedData: any = localStorage.getItem("data");
    if (router.isReady) {
      const { userId } = router.query;

      const getContents = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API}contents/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(storedData).token}`,
              },
            },
          );
          // console.log(data, "dddddd");
          setStory(data);
        } catch (err) {
          console.log(err);
        }
      };
      getContents();
    }
  }, [router.query]);

  return (
    <MyPagePresenter
      isChatBotVisible={isChatBotVisible}
      chatBotHandler={chatBotHandler}
      storyData={story}
    />
  );
};

export default MyPageContainer;
