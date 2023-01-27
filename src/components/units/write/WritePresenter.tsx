"use client";
import { useRefClick } from "@src/components/commons/hooks/useRefCtr";
import LogoItem from "@src/components/commons/items/logoItem";
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
import { useRef } from "react";

export interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
}

const WritePresenter = ({}) => {
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
        <WriteDate ref={dateRef} nextHandler={useRefClick(weatherRef)} />
        <WriteWeather
          ref={weatherRef}
          prevHandler={useRefClick(dateRef)}
          nextHandler={useRefClick(whereRef)}
        />
        <WriteWhere
          ref={whereRef}
          prevHandler={useRefClick(weatherRef)}
          nextHandler={useRefClick(whoRef)}
        />
        <WriteWho
          ref={whoRef}
          prevHandler={useRefClick(whereRef)}
          nextHandler={useRefClick(whatRef)}
        />
        <WriteWhat
          ref={whatRef}
          prevHandler={useRefClick(whoRef)}
          nextHandler={useRefClick(feelRef)}
        />
        <WriteFeeling
          ref={feelRef}
          prevHandler={useRefClick(whatRef)}
          nextHandler={useRefClick(pictureRef)}
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
        />
      </LogoMainBox>
    </WriteMain>
  );
};

export default WritePresenter;
