import * as S from "./DetailStyles";
import Test from "../../../../public/testImg/tImg.jpg";
import Pin from "../../../../public/icon/pin.png";
import DetailButton from "@src/components/commons/button/detailButton";
import AskModal from "@src/components/commons/modal/askModal";
import ConfirmModal from "@src/components/commons/modal/confirmModal";

import useLink from "@src/components/commons/hooks/useLink";
import { useCallback } from "react";

interface IProps {
  askModalVisible: boolean;
  askModalVisibleHandler: () => void;
  confirmModalVisible: boolean;
  askModalSuccessHandler: () => void;
}

const DetailPresenter = ({
  askModalVisible,
  askModalVisibleHandler,
  confirmModalVisible,
  askModalSuccessHandler,
}: IProps) => {
  const renderPage = useCallback(() => {
    return (
      <S.MainPage>
        <S.DetailLightTitle>
          <S.DetailBoldTitle>민영</S.DetailBoldTitle>
          님의 오늘
        </S.DetailLightTitle>

        <S.DetailContentsBox>
          <S.DetailImgBox>
            <S.DetailImg src={Test} alt="스토리이미지" fill={true} />
          </S.DetailImgBox>
          <S.DetailContents>
            <S.ContentsTitle>오늘은 용산에서 데이트!</S.ContentsTitle>
            <S.ContentsDate>MON JUL 18 / 2022</S.ContentsDate>
            <S.ContentsImg>이미지</S.ContentsImg>
            <S.ContentsText>첫줄</S.ContentsText>
            <S.ContentsText>두줄</S.ContentsText>
            <S.ContentsTextLast>세줄</S.ContentsTextLast>
            <S.ContentsAddressBox>
              <S.AddressPin src={Pin} alt="지도마커" />
              <S.ContentsAddress>서울특별시 머시기</S.ContentsAddress>
            </S.ContentsAddressBox>
          </S.DetailContents>
        </S.DetailContentsBox>
        <S.ButtonBox>
          <DetailButton title="목록" handler={useLink(`/mypage/${123}`)} />
          <DetailButton
            title="수정"
            handler={() => {
              console.log(1);
            }}
            isDark={true}
          />
          <DetailButton
            title="삭제"
            handler={askModalVisibleHandler}
            isLast={true}
          />
        </S.ButtonBox>
      </S.MainPage>
    );
  }, []);

  return (
    <S.MainContainer>
      <AskModal
        isVisible={askModalVisible}
        title="삭제하시겠습니까?"
        warning="삭제한 내용은 복구되지 않습니다."
        cancelHandler={askModalVisibleHandler}
        successHandler={askModalSuccessHandler}
      />
      <ConfirmModal
        title="게시글이 삭제되었습니다."
        isVisible={confirmModalVisible}
        handler={useLink(`/mypage/${123}`)}
        buttonTitle="확인"
      />
      {renderPage()}
      {/* <S.MainPage>
        <S.DetailLightTitle>
          <S.DetailBoldTitle>민영</S.DetailBoldTitle>
          님의 오늘
        </S.DetailLightTitle>

        <S.DetailContentsBox>
          <S.DetailImgBox>
            <S.DetailImg src={Test} alt="스토리이미지" fill={true} />
          </S.DetailImgBox>
          <S.DetailContents>
            <S.ContentsTitle>오늘은 용산에서 데이트!</S.ContentsTitle>
            <S.ContentsDate>MON JUL 18 / 2022</S.ContentsDate>
            <S.ContentsImg>이미지</S.ContentsImg>
            <S.ContentsText>첫줄</S.ContentsText>
            <S.ContentsText>두줄</S.ContentsText>
            <S.ContentsTextLast>세줄</S.ContentsTextLast>
            <S.ContentsAddressBox>
              <S.AddressPin src={Pin} alt="지도마커" />
              <S.ContentsAddress>서울특별시 머시기</S.ContentsAddress>
            </S.ContentsAddressBox>
          </S.DetailContents>
        </S.DetailContentsBox>
        <S.ButtonBox>
          <DetailButton title="목록" handler={useLink(`/mypage/${123}`)} />
          <DetailButton
            title="수정"
            handler={() => {
              console.log(2);
            }}
            isDark={true}
          />
          <DetailButton
            title="삭제"
            handler={askModalVisibleHandler}
            isLast={true}
          />
        </S.ButtonBox>
      </S.MainPage> */}
    </S.MainContainer>
  );
};

export default DetailPresenter;
