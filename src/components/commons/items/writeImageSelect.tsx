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
import { IPickImageProps } from "@src/components/units/write/WritePresenter";

const writeImageSelect = (
  {
    userId,
    current,
    refName,
    title,
    imgData,
    prevHandler,
    nextHandler,
    handler,
  }: IPickImageProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      {/* 제목 */}
      <WriteTitle>{title}</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {/* 데이터 */}
          {imgData.map((el) => (
            <WriteItem
              key={el.id}
              //   이벤트 "name"
              onClick={(e) => handler(refName, String(el.id))}
              current={current ? current === String(el.id) : null}
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

export default forwardRef(writeImageSelect);
