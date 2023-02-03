import imageCompression from "browser-image-compression";
import { ChangeEvent, useState } from "react";

const useFileUpload = ({ defaultImg }: any) => {
  const [file, setFile] = useState(defaultImg || null);
  const [previewFile, setPreviewFile] = useState(defaultImg || null);

  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const pickedHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      return;
    }
    try {
      const imageFile = event.currentTarget.files[0];

      const compressedFile = await imageCompression(imageFile, options);
      const convertedImg = new File([compressedFile], imageFile.name, {
        type: `${imageFile.type}`,
      });

      setFile(convertedImg);

      const reader = new FileReader();
      reader.readAsDataURL(convertedImg);
      reader.onloadend = () => setPreviewFile(reader.result);
    } catch (error) {
      console.log(error);
    }
  };

  return { file, previewFile, pickedHandler };
};

export default useFileUpload;
