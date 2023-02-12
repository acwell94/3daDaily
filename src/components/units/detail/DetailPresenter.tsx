import * as S from "./DetailStyles";

import Pin from "../../../../public/icon/pin.png";
import DetailButton from "@src/components/commons/button/detailButton";
import AskModal from "@src/components/commons/modal/askModal";
import ConfirmModal from "@src/components/commons/modal/confirmModal";

import useLink from "@src/components/commons/hooks/useLink";
import useDateForm from "@src/components/commons/hooks/useDateForm";
import useDailyIcon from "@src/components/commons/hooks/useDailyIcon";

interface IProps {
  askModalVisible: boolean;
  askModalVisibleHandler: () => void;
  confirmModalVisible: boolean;

  data?: {
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
  };
  deleteContentsHandler: (id: string) => void;
}

const DetailPresenter = ({
  askModalVisible,
  askModalVisibleHandler,
  confirmModalVisible,

  data,
  deleteContentsHandler,
}: IProps) => {
  const { year, month, date, day } = useDateForm(data?.foundData.date || "");
  const { feelImg, weatherImg, whoImg, whatImg } = useDailyIcon(
    data?.foundData.feeling,
    data?.foundData.weather,
    data?.foundData.withWhom,
    data?.foundData.what,
  );

  return (
    <S.MainContainer>
      <AskModal
        isVisible={askModalVisible}
        title="삭제하시겠습니까?"
        warning="삭제한 내용은 복구되지 않습니다."
        cancelHandler={askModalVisibleHandler}
        successHandler={() => deleteContentsHandler(data?.foundData._id)}
      />
      <ConfirmModal
        title="게시글이 삭제되었습니다."
        isVisible={confirmModalVisible}
        handler={useLink(`/mypage/${data?.user._id}`)}
        buttonTitle="확인"
      />
      <S.MainPage>
        <S.DetailLightTitle>
          <S.DetailBoldTitle>{data?.user.name}</S.DetailBoldTitle>
          님의 오늘
        </S.DetailLightTitle>

        <S.DetailContentsBox>
          <S.DetailImgBox>
            <S.DetailImg
              src={`http://localhost:5000/${data?.foundData?.image}`}
              alt="스토리이미지"
              fill={true}
              sizes="(max-width: 500px) 50vw, 100vw"
            />
          </S.DetailImgBox>
          <S.DetailContents>
            <div>
              <S.ContentsTitle>{data?.foundData.title}</S.ContentsTitle>
              <S.ContentsDate>{`${day} ${month} ${date} / ${year}`}</S.ContentsDate>
              <S.ContentsImg>
                <S.IconBox>
                  <S.Icon
                    src={feelImg?.img}
                    alt="분위기"
                    fill={true}
                    sizes="(max-width: 500px) 50vw, 100vw"
                  />
                </S.IconBox>
                <S.IconBox>
                  <S.Icon
                    src={weatherImg?.img}
                    alt="분위기"
                    fill={true}
                    sizes="(max-width: 500px) 50vw, 100vw"
                  />
                </S.IconBox>
                <S.IconBox>
                  <S.Icon
                    src={whoImg?.img}
                    alt="분위기"
                    fill={true}
                    sizes="(max-width: 500px) 50vw, 100vw"
                  />
                </S.IconBox>
                <S.IconBox>
                  <S.Icon
                    src={whatImg?.img}
                    alt="분위기"
                    fill={true}
                    sizes="(max-width: 500px) 50vw, 100vw"
                  />
                </S.IconBox>
              </S.ContentsImg>
              <S.ContentsText>{data?.foundData.firstContents}</S.ContentsText>
              <S.ContentsText>{data?.foundData.secondContents}</S.ContentsText>
              <S.ContentsTextLast>
                {data?.foundData.thirdContents}
              </S.ContentsTextLast>
            </div>

            <S.ContentsAddressBox>
              <S.AddressPinImgBox>
                <S.AddressPin
                  src={Pin}
                  alt="지도마커"
                  fill={true}
                  sizes="(max-width: 500px) 50vw, 100vw"
                />
              </S.AddressPinImgBox>
              <S.ContentsAddress>{data?.foundData.address}</S.ContentsAddress>
            </S.ContentsAddressBox>
          </S.DetailContents>
        </S.DetailContentsBox>
        <S.ButtonBox>
          <DetailButton
            title="목록"
            handler={useLink(`/mypage/${data?.user._id}`)}
          />
          <DetailButton
            title="수정"
            handler={useLink(`/detail/${data?.foundData._id}/edit`)}
            isDark={true}
          />
          <DetailButton
            title="삭제"
            handler={askModalVisibleHandler}
            isLast={true}
          />
        </S.ButtonBox>
      </S.MainPage>
    </S.MainContainer>
  );
};

export default DetailPresenter;
