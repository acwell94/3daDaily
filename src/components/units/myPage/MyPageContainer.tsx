"use client";
import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const [story, setStory] = useState();
  const router = useRouter();
  console.log(router.query, "123");
  const chatBotHandler = () => {
    setIsChatBotVisible((prev) => !prev);
  };

  // const getContents =async (id:string) => {

  // }

  useAuth();
  useEffect(() => {
    if (router.isReady) {
      const { userId } = router.query;
      console.log(router.query);
      const getContents = async () => {
        try {
          console.log(1);
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API}contents/${userId}`,
          );
          console.log(data, "data");
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
