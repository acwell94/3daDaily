import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { Feeling } from "@src/constants/contents";
import { forwardRef } from "react";
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
const WriteFeeling = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘 기분은 어땠나요?</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {Feeling.map((el) => (
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

export default forwardRef(WriteFeeling);
