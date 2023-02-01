import { useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [askModalVisible, setAskModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const askModalVisibleHandler = () => {
    setAskModalVisible((prev) => !prev);
  };

  const askModalSuccessHandler = () => {
    setAskModalVisible((prev) => !prev);
    setConfirmModalVisible((prev) => !prev);
  };

  return (
    <DetailPresenter
      askModalVisible={askModalVisible}
      askModalVisibleHandler={askModalVisibleHandler}
      confirmModalVisible={confirmModalVisible}
      askModalSuccessHandler={askModalSuccessHandler}
    />
  );
};

export default DetailContainer;
