import { ChangeEvent, useRef, useState } from "react";
import DefaultProfile from "../../../../public/icon/profileForm.png";
import styled from "styled-components";
import Image from "next/image";
import imageCompression from "browser-image-compression";

interface IProps {
  profileImg?: any;
}

const ImageBox = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 50%;
  margin-bottom: 4rem;
`;
const DefaultImage = styled(Image)`
  cursor: pointer;
  border-radius: 50%;
`;
const ImageUpload = ({ profileImg }: IProps) => {
  const filePickerRef = useRef<any>();
  // api요청 데이터
  const [file, setFile] = useState<any>(profileImg || null);
  // 미리보기 데이터
  const [previewFile, setPreviewFile] = useState<any>(profileImg || null);

  const pickedHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      return;
    }

    const imageFile = event.currentTarget.files[0];
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // blob 데이터로 변환 및 압축
      const compressedFile = await imageCompression(imageFile, options);

      // blob에서 file로 변환
      const convert = new File([compressedFile], imageFile.name, {
        type: `${imageFile.type}`,
      });
      // api로 요청할 데이터
      setFile(convert);

      // preview 만들어줄 데이터
      const reader = new FileReader();
      reader.readAsDataURL(convert);
      reader.onloadend = () => setPreviewFile(reader.result);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(previewFile);

  const pickImageHandler = () => {
    if (!filePickerRef.current.click()) {
      return;
    }
    filePickerRef.current.click();
  };

  return (
    <div>
      {previewFile ? (
        <ImageBox>
          <DefaultImage
            src={previewFile}
            alt="프로필"
            onClick={pickImageHandler}
            fill={true}
          />
        </ImageBox>
      ) : (
        <ImageBox>
          <DefaultImage
            src={DefaultProfile}
            alt="기본"
            onClick={pickImageHandler}
            fill={true}
          />
        </ImageBox>
      )}
      <input
        ref={filePickerRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
