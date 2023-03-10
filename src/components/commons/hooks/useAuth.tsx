"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken: any = localStorage.getItem("accessToken");
    const refreshToken: any = localStorage.getItem("refreshToken");

    if (!accessToken) {
      alert("로그인 후 이용해 주세요.");
      router.replace("/signin");
    }
    if (router.isReady) {
      const checkUser = async (access: any) => {
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API}users/token`,
            {
              token: "hi",
            },
            {
              headers: {
                Authorization: `Bearer ${access}`,
              },
            },
          );
        } catch (err) {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API}users/checkUser`,
              {
                refresh: JSON.parse(refreshToken),
              },
            );

            const { token } = response.data;
            localStorage.setItem("accessToken", JSON.stringify(token));
            router.reload();
          } catch (err) {
            alert("인증이 만료되었습니다. 다시 로그인 해주세요.");
            router.replace("/signin");
          }
        }
      };
      checkUser(JSON.parse(accessToken));
    }
  }, [router.query]);

  // 이후 체크
};

export default useAuth;
