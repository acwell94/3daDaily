"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import { forwardRef, MouseEvent } from "react";
import styled from "styled-components";
import LogoItem from "./logoItem";
import { Weather } from "../../../constants/contents";
import Image from "next/image";

import WriteCtrButton from "../button/writeCtrButton";

import {
  WriteContainer,
  WriteImg,
  WriteImgBox,
  WriteImgTitle,
  WriteItem,
  WritePickBox,
  WriteTitle,
} from "../styles/commonStyles";
interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (e: MouseEvent<HTMLDivElement>, name: string) => void;
}
const WriteWeather = (
  { prevHandler, nextHandler, handler }: IWriteProps,
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
            >
              <WriteImg src={el.img} alt={el.title} />
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
