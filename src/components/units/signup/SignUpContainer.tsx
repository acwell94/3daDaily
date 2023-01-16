"use client";

import { useRouter } from "next/router";
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = () => {
  const router = useRouter();

  const linkToSignIn = (link: string) => {
    router.push(link);
  };

  return <SignUpPresenter linkHandler={linkToSignIn} />;
};

export default SignUpContainer;
