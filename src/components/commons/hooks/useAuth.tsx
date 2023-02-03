"use client";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [expiredToken, setExpiredToken] = useState();

  useEffect(() => {
    const token: any = localStorage.getItem("token");
    const currentTime = Math.floor(Date.now() / 1000);

    try {
      const decodedToken = jwt.decode(token);
      console.log(decodedToken);
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useAuth;
