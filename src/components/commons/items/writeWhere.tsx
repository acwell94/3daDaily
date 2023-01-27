"use client";
import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import { forwardRef } from "react";
import styled from "styled-components";
import WriteCtrButton from "../button/writeCtrButton";
import {
  WriteContainer,
  WritePickBox,
  WriteTitle,
} from "../styles/commonStyles";
import LogoItem from "./logoItem";

const WriteWhere = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>어디에 있었나요?</WriteTitle>
      <WritePickBox></WritePickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="다음"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WriteWhere);
