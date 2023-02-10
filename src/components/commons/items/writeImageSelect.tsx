"use client";

import { forwardRef } from "react";

import LogoItem from "./logoItem";

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

      <WriteTitle>{title}</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {imgData.map((el) => (
            <WriteItem
              key={el.id}
              onClick={() => handler(refName, String(el.id))}
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
