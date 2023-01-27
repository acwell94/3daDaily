"use client";
import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { WithWhom } from "@src/constants/contents";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import { forwardRef } from "react";
import styled from "styled-components";
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

const WriteWho = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>누구와 함께 했나요?</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {WithWhom.map((el) => (
            <WriteItem key={el.id}>
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
