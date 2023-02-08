import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";

interface IDetail {
  user: {
    id: string;
    name: string;
    email: string;
  };
  foundData: {
    address: string;
    creator: string;
    date: string;
    feeling: string;
    firstContents: string;
    secondContents: string;
    thirdContents: string;
    id: string;
    image: string;
    location: {
      lat: number;
      lng: number;
    };
    title: string;
    weather: string;
    what: string;
    withWhom: string;
    _id: string;
  };
}

const DetailContainer = () => {
  useAuth();
  const router = useRouter();
  const [askModalVisible, setAskModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [detail, setDetail] = useState<IDetail>();
  const askModalVisibleHandler = () => {
    setAskModalVisible((prev) => !prev);
  };

  const askModalSuccessHandler = () => {
    setAskModalVisible((prev) => !prev);
    setConfirmModalVisible((prev) => !prev);
  };
  console.log(router.query, "query");
  useEffect(() => {
    const storedData: any = localStorage.getItem("accessToken");
    if (router.isReady) {
      const getDetail = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API}contents/detail/${router.query.storyId}`,
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(storedData)}`,
              },
            },
          );
          console.log(data, "data");
          setDetail(data);
        } catch (err) {
          console.log(err);
        }
      };
      getDetail();
    }
  }, [router.query]);

  return (
    <DetailPresenter
      askModalVisible={askModalVisible}
      askModalVisibleHandler={askModalVisibleHandler}
      confirmModalVisible={confirmModalVisible}
      askModalSuccessHandler={askModalSuccessHandler}
      data={detail}
    />
  );
};

export default DetailContainer;
