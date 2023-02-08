import useAuth from "@src/components/commons/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";

interface IDetail {
  user: {
    _id: string;
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

  // 데이터 불러오기 함수
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
          setDetail(data);
        } catch (err) {
          console.log(err);
        }
      };
      getDetail();
    }
  }, [router.query]);
  // 데이터 삭제

  const deleteContentsHandler = async (id: string) => {
    const storedData: any = localStorage.getItem("accessToken");
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API}contents/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(storedData)}`,
        },
      });
      setAskModalVisible((prev) => !prev);
      setConfirmModalVisible((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DetailPresenter
      askModalVisible={askModalVisible}
      askModalVisibleHandler={askModalVisibleHandler}
      confirmModalVisible={confirmModalVisible}
      askModalSuccessHandler={askModalSuccessHandler}
      data={detail}
      deleteContentsHandler={deleteContentsHandler}
    />
  );
};

export default DetailContainer;
