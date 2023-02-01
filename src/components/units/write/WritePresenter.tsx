"use client";
import { useRefClick } from "@src/components/commons/hooks/useRefCtr";
import WriteDaily from "@src/components/commons/items/writeDaily";
import WriteDate from "@src/components/commons/items/writeDate";
import WriteFeeling from "@src/components/commons/items/writeFeeling";
import WritePicture from "@src/components/commons/items/writePicture";
import WriteWeather from "@src/components/commons/items/writeWeather";
import WriteWhat from "@src/components/commons/items/writeWhat";
import WriteWhere from "@src/components/commons/items/writeWhere";
import WriteWho from "@src/components/commons/items/writeWho";
import {
  WriteMain,
  LogoMainBox,
} from "@src/components/commons/styles/commonStyles";
import { ChangeEvent, MouseEvent, useRef } from "react";

interface IProps {
  currentData: {
    title: string;
    firstContents: string;
    secondContents: string;
    thirdContents: string;
    date: Date;
    weather: string;
    address: string;
    withWhom: string;
    what: string;
    feeling: string;
    image: string;
  };
  changeDateHandler: (data: Date) => void;
  changeSelectImgHandler: (e: MouseEvent<HTMLDivElement>, name: string) => void;
  changeLocationHandler: (address: string) => void;
  changeDailyHandler: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
}

export interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
}

const WritePresenter = ({
  currentData,
  changeDateHandler,
  changeSelectImgHandler,
  changeLocationHandler,
  changeDailyHandler,
}: IProps) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const weatherRef = useRef<HTMLInputElement>(null);
  const whereRef = useRef<HTMLInputElement>(null);
  const whoRef = useRef<HTMLInputElement>(null);
  const whatRef = useRef<HTMLInputElement>(null);
  const feelRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const dailyRef = useRef<HTMLInputElement>(null);

  return (
    <WriteMain>
      <LogoMainBox>
        <WriteDate
          ref={dateRef}
          currentDate={currentData.date}
          changeDateHandler={changeDateHandler}
          nextHandler={useRefClick(weatherRef)}
        />
        <WriteWeather
          ref={weatherRef}
          prevHandler={useRefClick(dateRef)}
          nextHandler={useRefClick(whereRef)}
          handler={changeSelectImgHandler}
        />
        <WriteWhere
          ref={whereRef}
          prevHandler={useRefClick(weatherRef)}
          nextHandler={useRefClick(whoRef)}
          handler={changeLocationHandler}
        />
        <WriteWho
          ref={whoRef}
          prevHandler={useRefClick(whereRef)}
          nextHandler={useRefClick(whatRef)}
          handler={changeSelectImgHandler}
        />
        <WriteWhat
          ref={whatRef}
          prevHandler={useRefClick(whoRef)}
          nextHandler={useRefClick(feelRef)}
          handler={changeSelectImgHandler}
        />
        <WriteFeeling
          ref={feelRef}
          prevHandler={useRefClick(whatRef)}
          nextHandler={useRefClick(pictureRef)}
          handler={changeSelectImgHandler}
        />
        <WritePicture
          ref={pictureRef}
          prevHandler={useRefClick(feelRef)}
          nextHandler={useRefClick(dailyRef)}
        />
        <WriteDaily
          ref={dailyRef}
          prevHandler={useRefClick(pictureRef)}
          // nextHandler={useRefClick(dailyRef)}
          changeHandler={changeDailyHandler}
        />
      </LogoMainBox>
    </WriteMain>
  );
};

export default WritePresenter;
