"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const storedData: any = localStorage.getItem("data");
    console.log(JSON.parse(storedData).refreshToken, "stored");
    if (!storedData) {
      alert("로그인 후 이용해 주세요.");
      router.push("/signin");
    }
    const checkAuth = async () => {
      console.log("실행");
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API}users/checkUser`,
          {
            refreshToken: JSON.parse(storedData).refreshToken,
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(storedData).token}`,
            },
          },
        );
        console.log(data, "data");
        console.log("끝");

        localStorage.setItem("data", JSON.stringify(data));
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

  // 이후 체크
};

export default useAuth;
