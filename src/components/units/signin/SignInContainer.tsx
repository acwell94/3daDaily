"use client";
import { useRouter } from "next/router";
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
  const router = useRouter();

  const linkHandler = (url: string) => {
    router.push(url);
  };

  return <SignInPresenter linkHandler={linkHandler} />;
};

export default SignInContainer;
