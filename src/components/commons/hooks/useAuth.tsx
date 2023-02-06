"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [_, setRefresh] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setRefresh(JSON.parse(storedData));
    } else {
      alert("로그인 후 이용해 주세요.");
      router.push("/signin");
    }
  }, []);
  // 이후 체크
  // const checkAuth = async () => {
  //   if (refresh) {
  //     try {
  //       const { data } = await axios.post(
  //         `${process.env.NEXT_PUBLIC_API}users/checkUser`,
  //         {
  //           refreshToken: refresh.refreshToken,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${refresh.token}`,
  //           },
  //         },
  //       );
  //       console.log(data, "dd");
  //       localStorage.setItem("data", JSON.stringify(data));
  //     } catch (err) {
  //       console.log(err, "err");
  //     }
  //   }
  // };
  // checkAuth();
};

export default useAuth;
