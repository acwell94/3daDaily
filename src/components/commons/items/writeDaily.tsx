import { ChangeEvent, forwardRef } from "react";
import WriteCtrButton from "../button/writeCtrButton";

import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import styled from "styled-components";
import theme from "@src/utils/theme";
import { flexBox } from "@src/utils/flexBox";

interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  changeHandler: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  first: string;
  second: string;
  third: string;
}

const TitleInputBox = styled.div`
  width: 98%;
  padding: 2rem 5rem;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  margin-bottom: 4rem;
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 2rem;

  ::placeholder {
    color: ${theme.colors.sliverGray};
    padding-left: 0.3rem;
  }
  border: none;
`;

const DailyPickBox = styled.div`
  ${flexBox("col", "around", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 5rem 10rem;
  width: 98%;
  height: 100%;
  max-height: 50rem;
`;

interface IStyle {
  warning: boolean;
}

const InputBox = styled.div`
  ${flexBox("col")}
  width: 100%;
`;

const DailyContents = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${theme.colors.mainPurple};
  padding-bottom: 1rem;
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  ::placeholder {
    color: ${theme.colors.sliverGray};
    padding-left: 0.3rem;
  }
`;

const LimitCharacter = styled.div<IStyle>`
  font-size: 1.5rem;
  color: ${(props) => (props.warning ? `${theme.colors.red}` : null)};
`;

const WriteDaily = (
  {
    prevHandler,
    nextHandler,
    changeHandler,
    first,
    second,
    third,
  }: IWriteProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘 남기고 싶은 이야기를 적어주세요!</WriteTitle>
      <TitleInputBox>
        <TitleInput
          placeholder="20자 이내로 제목을 입력해주세요."
          onChange={(e) => changeHandler(e, "title")}
          maxLength={20}
        />
      </TitleInputBox>
      <DailyPickBox>
        <InputBox>
          <DailyContents
            placeholder="첫 번째 줄을 입력해주세요."
            onChange={(e) => changeHandler(e, "firstContents")}
            maxLength={30}
          />
          <LimitCharacter warning={first.length === 30}>
            {first.length}/ 30
          </LimitCharacter>
        </InputBox>
        <InputBox>
          <DailyContents
            placeholder="두 번째 줄을 입력해주세요."
            onChange={(e) => changeHandler(e, "secondContents")}
            maxLength={30}
          />
          <LimitCharacter warning={second.length === 30}>
            {second.length}/ 30
          </LimitCharacter>
        </InputBox>
        <InputBox>
          <DailyContents
            placeholder="세 번째 줄을 입력해주세요."
            onChange={(e) => changeHandler(e, "thirdContents")}
            maxLength={30}
          />
          <LimitCharacter warning={third.length === 30}>
            {third.length}/ 30
          </LimitCharacter>
        </InputBox>
      </DailyPickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="완료"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WriteDaily);
