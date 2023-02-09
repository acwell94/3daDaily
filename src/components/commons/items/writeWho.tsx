"use client";

import { IPickImageProps } from "@src/components/units/write/WritePresenter";
import { WithWhom } from "@src/constants/contents";

import { forwardRef, MouseEvent } from "react";

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
import LogoItem from "./logoItem";

const WriteWho = (
  { prevHandler, nextHandler, handler, current, userId }: IPickImageProps,
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
              onClick={(e) => handler("withWhom", String(el.id))}
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

export default forwardRef(WriteWho);
