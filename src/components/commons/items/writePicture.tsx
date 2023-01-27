import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { forwardRef } from "react";
import WriteCtrButton from "../button/writeCtrButton";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import fileUpload from "../../../../public/fileUpload.png";
import styled from "styled-components";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";

const PicturePickBox = styled.div`
  ${flexBox("col", "center", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 100%;
  height: 100%;
  max-height: 50rem;
`;

const FileUploadImg = styled(Image)`
  width: 12.8rem;
  height: 12.8rem;
  margin-bottom: 3rem;
`;

const FileUploadTitle = styled.div`
  font-size: 1.6rem;
  color: ${theme.colors.middleGray};
`;

const WritePicture = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘을 기념할 사진이 있나요?</WriteTitle>
      <PicturePickBox>
        <FileUploadImg src={fileUpload} alt="파일업로드" />
        <FileUploadTitle>
          이미지는 5M이하인 JPG, PNG 형식만 가능합니다.
        </FileUploadTitle>
      </PicturePickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="다음"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WritePicture);
