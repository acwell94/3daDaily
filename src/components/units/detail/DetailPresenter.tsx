import * as S from "./DetailStyles";
import Test from "../../../../public/testImg/tImg.jpg";
import Pin from "../../../../public/pin.png";
import DetailButton from "@src/components/commons/button/detailButton";
const DetailPresenter = () => {
  return (
    <S.MainContainer>
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
        <DetailButton title="목록" />
        <DetailButton title="수정" isDark={true} />
        <DetailButton title="삭제" isLast={true} />
      </S.ButtonBox>
    </S.MainContainer>
  );
};

export default DetailPresenter;
