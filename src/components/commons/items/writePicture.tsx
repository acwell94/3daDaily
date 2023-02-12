import { forwardRef, useEffect, useRef } from "react";
import WriteCtrButton from "../button/writeCtrButton";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import fileUploadDefault from "../../../../public/icon/fileUpload.png";

import styled from "styled-components";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import useFileUpload from "../hooks/useFileUpload";
interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler?: any;
  current: string;
}

interface IStyleProps {
  current: string;
}
const PicturePickBox = styled.div`
  ${flexBox("col", "center", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 98%;
  height: 100%;
  max-height: 50rem;
`;
const DefaultImageBox = styled.div<IStyleProps>`
  width: ${(props) => (props.current ? "50rem" : "12rem")};
  height: ${(props) => (props.current ? "50rem" : "12rem")};
  position: relative;
  margin-bottom: 3rem;
`;

const UploadedFileImageBox = styled.div`
  width: 50rem;
  height: 50rem;
  position: relative;
  margin-bottom: 3rem;
`;

const FileUploadImg = styled(Image)`
  cursor: pointer;
  border-radius: 8px;
`;

const FileUploadTitle = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: ${theme.colors.middleGray};
  word-break: keep-all;
`;

const WritePicture = (
  { prevHandler, nextHandler, handler, current }: IWriteProps,
  ref: any,
) => {
  const filePickerRef = useRef<any>();
  const { file, previewFile, pickedHandler } = useFileUpload();

  useEffect(() => {
    handler(file);
  }, [file]);

  const pickImageHandler = () => {
    if (!filePickerRef.current.click()) {
      return;
    }
    filePickerRef.current.click();
  };

  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘을 기념할 사진이 있나요?</WriteTitle>
      <PicturePickBox>
        {previewFile ? (
          <UploadedFileImageBox>
            <FileUploadImg
              src={previewFile}
              alt="profile"
              onClick={pickImageHandler}
              fill={true}
            />
          </UploadedFileImageBox>
        ) : (
          <DefaultImageBox current={current}>
            <FileUploadImg
              src={
                current ? `http://localhost:5000/${current}` : fileUploadDefault
              }
              alt="default"
              onClick={pickImageHandler}
              fill={true}
              sizes="(max-width: 500px) 50vw, 100vw"
            />
          </DefaultImageBox>
        )}
        <input
          ref={filePickerRef}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}
          style={{ display: "none" }}
        />
        <FileUploadTitle>
          이미지는 JPG, JPEG, PNG 형식만 가능합니다.
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
