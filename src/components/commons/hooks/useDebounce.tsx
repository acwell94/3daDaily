import axios from "axios";
import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number, url: string) => {
  const [successData, setSuccessData] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const handler = setTimeout(async () => {
      try {
        const { data } = await axios.get(`${url}${value}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setSuccessData(data);
      } catch (err) {
        setSuccessData("");
      }
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return successData;
};

export default useDebounce;
