"use client";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [refresh, setRefresh] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setRefresh(JSON.parse(storedData));
    } else {
      router.push("/signin");
    }
  }, []);

  const checkAuth = async () => {
    if (refresh) {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API}users/checkUser`,
          {
            refreshToken: refresh.refreshToken,
          },
          {
            headers: {
              Authorization: ` Bearer ${refresh.token}`,
            },
          },
        );

        localStorage.setItem("data", JSON.stringify(data));
      } catch (err) {
        console.log(err, "err");
      }
    } else {
      console.log("err");
    }
  };
  checkAuth();
};

export default useAuth;
