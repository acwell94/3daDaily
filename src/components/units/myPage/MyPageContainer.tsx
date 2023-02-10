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
  const [prevSelect, setPrevSelect] = useState({
    category: "",
    sort: "",
  });
  const router = useRouter();

  const chatBotHandler = () => {
    setIsChatBotVisible((prev) => !prev);
  };

  const getSortedContents = async (category: string, sort: string) => {
    const { userId } = router.query;

    if (prevSelect.category === category && prevSelect.sort === sort) {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}contents/${userId}`,
        );
        setStory(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}contents/${userId}?category=${category}&sort=${sort}`,
        );
        setStory(data);
        setPrevSelect({
          category,
          sort,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { userId } = router.query;

      const getContents = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API}contents/${userId}`,
          );
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
      getSortedContents={getSortedContents}
    />
  );
};

export default MyPageContainer;
