import { Feeling } from "@src/constants/contents";
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
interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (e: MouseEvent<HTMLDivElement>, name: string) => void;
}
const WriteFeeling = (
  { prevHandler, nextHandler, handler }: IWriteProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘 기분은 어땠나요?</WriteTitle>
      <WritePickBox>
        <WriteImgBox>
          {Feeling.map((el) => (
            <WriteItem
              key={el.id}
              onClick={(e) => handler(e, "feeling")}
              id={`${el.id}`}
            >
              <WriteImgLimit>
                <WriteImg src={el.img} alt={el.title} fill={true} />
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

export default forwardRef(WriteFeeling);
