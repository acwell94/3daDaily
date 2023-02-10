"use client";
import { useRefClick } from "@src/components/commons/hooks/useRefCtr";
import WriteDaily from "@src/components/commons/items/writeDaily";
import WriteDate from "@src/components/commons/items/writeDate";
import WriteImageSelect from "@src/components/commons/items/writeImageSelect";
import WritePicture from "@src/components/commons/items/writePicture";
import WriteWhat from "@src/components/commons/items/writeWhat";
import WriteWhere from "@src/components/commons/items/writeWhere";
import {
  WriteMain,
  LogoMainBox,
} from "@src/components/commons/styles/commonStyles";
import {
  Feeling,
  IData,
  Weather,
  What,
  WithWhom,
} from "@src/constants/contents";
import { ChangeEvent } from "react";

interface IProps {
  dateRef: any;
  weatherRef: any;
  whereRef: any;
  whoRef: any;
  whatRef: any;
  feelRef: any;
  pictureRef: any;
  dailyRef: any;
  currentData: {
    title: string;
    firstContents: string;
    secondContents: string;
    thirdContents: string;
    date: string;
    weather: string;
    address: string;
    location: {
      lat: number;
      lng: number;
    };
    withWhom: string;
    what: string;
    feeling: string;
    image: any;
  };
  changeDateHandler: (data: Date) => void;
  changeSelectImgHandler: (name: string, id: string) => void;
  changeLocationHandler: (address: string) => void;
  changeDailyHandler: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  changePictureHandler: (image: any) => void;
  createContentsHandler: () => void;
  userId: string;
  isEdit: boolean;
  editContentsHandler: () => void;
}

export interface IPickImageProps {
  userId: string;
  current: string;
  refName: string;
  title: string;
  imgData: IData[];
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (name: string, id: string) => void;
}

const WritePresenter = ({
  dateRef,
  weatherRef,
  whereRef,
  whoRef,
  whatRef,
  feelRef,
  pictureRef,
  dailyRef,
  currentData,
  changeDateHandler,
  changeSelectImgHandler,
  changeLocationHandler,
  changeDailyHandler,
  changePictureHandler,
  createContentsHandler,
  userId,
  isEdit,
  editContentsHandler,
}: IProps) => {
  return (
    <WriteMain>
      <LogoMainBox>
        <WriteDate
          ref={dateRef}
          currentDate={currentData.date}
          changeDateHandler={changeDateHandler}
          nextHandler={useRefClick(weatherRef)}
        />
        <WriteImageSelect
          ref={weatherRef}
          userId={userId}
          current={currentData.weather}
          refName="weather"
          title="오늘 날씨는 어땠나요?"
          imgData={Weather}
          prevHandler={useRefClick(dateRef)}
          nextHandler={useRefClick(whereRef)}
          handler={changeSelectImgHandler}
        />

        <WriteWhere
          ref={whereRef}
          current={currentData.location}
          isEdit={isEdit}
          prevHandler={useRefClick(weatherRef)}
          nextHandler={useRefClick(whoRef)}
          handler={changeLocationHandler}
        />
        <WriteImageSelect
          ref={whoRef}
          userId={userId}
          current={currentData.withWhom}
          refName="withWhom"
          title="누구와 함께 했나요?"
          imgData={WithWhom}
          prevHandler={useRefClick(whereRef)}
          nextHandler={useRefClick(whatRef)}
          handler={changeSelectImgHandler}
        />
        <WriteWhat
          ref={whatRef}
          userId={userId}
          current={currentData.what}
          refName="what"
          title="무엇을 하셨나요?"
          imgData={What}
          prevHandler={useRefClick(whoRef)}
          nextHandler={useRefClick(feelRef)}
          handler={changeSelectImgHandler}
        />
        <WriteImageSelect
          ref={feelRef}
          userId={userId}
          current={currentData.feeling}
          refName="feeling"
          title="오늘 기분은 어땠나요?"
          imgData={Feeling}
          prevHandler={useRefClick(whatRef)}
          nextHandler={useRefClick(pictureRef)}
          handler={changeSelectImgHandler}
        />
        <WritePicture
          ref={pictureRef}
          current={currentData.image}
          prevHandler={useRefClick(feelRef)}
          nextHandler={useRefClick(dailyRef)}
          handler={changePictureHandler}
        />
        <WriteDaily
          ref={dailyRef}
          defaultTitle={currentData.title}
          isEdit={isEdit}
          first={currentData.firstContents}
          second={currentData.secondContents}
          third={currentData.thirdContents}
          prevHandler={useRefClick(pictureRef)}
          createHandler={createContentsHandler}
          changeHandler={changeDailyHandler}
          editContentsHandler={editContentsHandler}
        />
      </LogoMainBox>
    </WriteMain>
  );
};

export default WritePresenter;
