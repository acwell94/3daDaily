"use client";

import { forwardRef, MouseEvent } from "react";

import LogoItem from "./logoItem";
import { Weather } from "../../../constants/contents";

import WriteCtrButton from "../button/writeCtrButton";

import {
  WriteContainer,
  WriteImg,
  WriteImgBox,
  WriteImgLimit,
  WriteImgTitle,
  WriteItem,
  WritePickBox,
  WriteTitle,
} from "../styles/commonStyles";
interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (e: MouseEvent<HTMLDivElement>, name: string) => void;
  current: string;
}
const WriteWeather = (
  { prevHandler, nextHandler, handler, current }: IWriteProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘 날씨는 어땠나요?</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {Weather.map((el) => (
            <WriteItem
              key={el.id}
              onClick={(e) => handler(e, "weather")}
              id={`${el.id}`}
              current={current === String(el.id)}
            >
              <WriteImgLimit>
                <WriteImg
                  src={el.img}
                  alt={el.title}
                  fill={true}
                  sizes="(max-width: 500px) 50vw, 100vw"
                />
              </WriteImgLimit>
              <WriteImgTitle>{el.title}</WriteImgTitle>
            </WriteItem>
          ))}
        </WriteImgBox>
      </WritePickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="다음"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WriteWeather);
