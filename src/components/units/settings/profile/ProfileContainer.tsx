import useAuth from "@src/components/commons/hooks/useAuth";
import useFileUpload from "@src/components/commons/hooks/useFileUpload";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = () => {
  useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [updateName, setUpdateName] = useState<string>();
  const [askModalVisible, setAskModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const filePickerRef = useRef<any>();
  const { file, previewFile, pickedHandler } = useFileUpload();

  const pickImageHandler = () => {
    if (!filePickerRef.current.click()) {
      return;
    }
    filePickerRef.current.click();
  };
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const token = localStorage.getItem("accessToken");

    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}users/findUser/${
            JSON.parse(storedData).email
          }`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          },
        );
        setUpdateName(data.foundUser.name);
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const changeProfileHandler = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const formData = new FormData();
      formData.append("name", updateName);
      formData.append("profileImg", file);

      await axios.patch(
        `${process.env.NEXT_PUBLIC_API}users/changeProfile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        },
      );
      setAskModalVisible((prev) => !prev);
      setConfirmModalTitle("프로필이 변경되었습니다.");
      setConfirmModalVisible((prev) => !prev);
    } catch (err) {
      console.log(err);
      setAskModalVisible((prev) => !prev);
      setConfirmModalTitle("잠시후 다시 시도해 주세요.");
      setConfirmModalVisible((prev) => !prev);
    }
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateName(e.target.value);
  };

  const askModalHandler = () => {
    setAskModalVisible((prev) => !prev);
  };

  const confirmModalHandler = () => {
    setConfirmModalVisible((prev) => !prev);
    router.back();
  };

  return (
    <ProfilePresenter
      userData={userData}
      filePickerRef={filePickerRef}
      previewFile={previewFile}
      pickedHandler={pickedHandler}
      pickImageHandler={pickImageHandler}
      updateName={updateName}
      changeName={changeName}
      changeProfileHandler={changeProfileHandler}
      askModalVisible={askModalVisible}
      askModalHandler={askModalHandler}
      confirmModalVisible={confirmModalVisible}
      confirmModalHandler={confirmModalHandler}
      confirmModalTitle={confirmModalTitle}
    />
  );
};
export default ProfileContainer;
