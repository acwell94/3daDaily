import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { forwardRef } from "react";
import WriteCtrButton from "../button/writeCtrButton";

import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import styled from "styled-components";
import theme from "@src/utils/theme";
import { flexBox } from "@src/utils/flexBox";

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

const DailyContents = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${theme.colors.mainPurple};
  padding-bottom: 1rem;
  width: 100%;
  /* height: 90%; */
  font-size: 1.6rem;
  ::placeholder {
    color: ${theme.colors.sliverGray};
    padding-left: 0.3rem;
  }
`;

const WriteDaily = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>오늘 남기고 싶은 이야기를 적어주세요!</WriteTitle>
      <TitleInputBox>
        <TitleInput placeholder="제목을 입력해주세요." />
      </TitleInputBox>
      <DailyPickBox>
        <DailyContents placeholder="첫 번째 줄을 입력해주세요." />
        <DailyContents placeholder="두 번째 줄을 입력해주세요." />
        <DailyContents placeholder="세 번째 줄을 입력해주세요." />
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
