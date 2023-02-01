"use client";

import { WithWhom } from "@src/constants/contents";

import { forwardRef, MouseEvent } from "react";

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
import LogoItem from "./logoItem";
interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (e: MouseEvent<HTMLDivElement>, name: string) => void;
}
const WriteWho = (
  { prevHandler, nextHandler, handler }: IWriteProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>누구와 함께 했나요?</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {WithWhom.map((el) => (
            <WriteItem
              key={el.id}
              onClick={(e) => handler(e, "withWhom")}
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

export default forwardRef(WriteWho);
