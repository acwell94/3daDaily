import useAuth from "@src/components/commons/hooks/useAuth";
import useDebounce from "@src/components/commons/hooks/useDebounce";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import FriendPresenter from "./FriendPresenter";
interface ILocal {
  email: string;
  name: string;
  userId: string;
}

const FriendContainer = () => {
  useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<ILocal>();
  const [friendData, setFriendData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [deleteFriendConfirmModalVisible, setDeleteFriendConfirmModalVisible] =
    useState(false);
  const [createFriendConfirmModalVisible, setCreateFriendConfirmModalVisible] =
    useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("data");
    setUserData(JSON.parse(userData));
    const token = localStorage.getItem("accessToken");

    const getFriend = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}users/getPair`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          },
        );
        setFriendData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriend();
  }, []);

  const findData = useDebounce(
    searchInput,
    1000,
    `${process.env.NEXT_PUBLIC_API}users/findUser/`,
  );

  const findEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const deleteConfirmModalHandler = () => {
    router.reload();
    setDeleteFriendConfirmModalVisible((prev) => !prev);
  };

  const createConfirmModalHandler = () => {
    router.reload();
    setCreateFriendConfirmModalVisible((prev) => !prev);
  };

  const deleteFriendHandler = async (friendId: string) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/deletePair`,
        {
          pairId: friendId,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      setDeleteFriendConfirmModalVisible((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  const createPairHandler = async (friendEmail: string, friendId: string) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API}users/createPair`,
        {
          pairId: friendId,
          pairEmail: friendEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      setCreateFriendConfirmModalVisible((prev) => !prev);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  return (
    <FriendPresenter
      userData={userData}
      findEmailHandler={findEmailHandler}
      friendData={friendData}
      searchInput={searchInput}
      findData={findData}
      deleteFriendHandler={deleteFriendHandler}
      createPairHandler={createPairHandler}
      deleteFriendConfirmModalVisible={deleteFriendConfirmModalVisible}
      deleteConfirmModalHandler={deleteConfirmModalHandler}
      createFriendConfirmModalVisible={createFriendConfirmModalVisible}
      createConfirmModalHandler={createConfirmModalHandler}
    />
  );
};

export default FriendContainer;
