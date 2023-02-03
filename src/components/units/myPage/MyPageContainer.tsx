"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  const chatBotHandler = () => {
    setIsChatBotVisible((prev) => !prev);
  };

  return (
    <MyPagePresenter
      isChatBotVisible={isChatBotVisible}
      chatBotHandler={chatBotHandler}
    />
  );
};

export default MyPageContainer;
