"use client";
import useAuth from "@src/components/commons/hooks/useAuth";

import { useState } from "react";
import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  const chatBotHandler = () => {
    setIsChatBotVisible((prev) => !prev);
  };
  useAuth();
  return (
    <MyPagePresenter
      isChatBotVisible={isChatBotVisible}
      chatBotHandler={chatBotHandler}
    />
  );
};

export default MyPageContainer;
