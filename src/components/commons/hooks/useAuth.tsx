"use client";
import jwt from "jsonwebtoken";
import { useEffect } from "react";

const useAuth = () => {
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    const currentTime = Math.floor(Date.now() / 1000);
    console.log(currentTime);
    try {
      const decodedToken = jwt.decode(token);
      console.log(decodedToken);
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useAuth;
