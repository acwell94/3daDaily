"use client";
import theme from "@src/utils/theme";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { forwardRef, useState } from "react";
import { flexBox } from "@src/utils/flexBox";
import WriteCtrButton from "../button/writeCtrButton";
import LogoItem from "./logoItem";
import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";

const DatePickerBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 100%;
  height: 100%;
  max-height: 50rem;
  > div {
    width: 60%;
    height: 100%;
  }
  .react-datepicker {
    width: 100%;
    height: 100%;
  }
  .react-datepicker__month-container {
    width: 100%;
    height: 100%;
  }
  // 최상단
  .react-datepicker__header {
    ${flexBox("col", "around", "center")}
    width: 100%;
    height: 15%;
    background-color: ${theme.colors.ashBlue};
    padding: 2rem 0;
  }
  .react-datepicker__navigation {
    top: 0;
  }
  .react-datepicker__navigation--next {
    right: 4rem;
  }
  .react-datepicker__navigation--previous {
    left: 4rem;
  }
  .react-datepicker__navigation-icon {
    font-size: 2rem;
  }
  // 최상단 월 연도
  .react-datepicker__current-month {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .react-datepicker__current-month {
    height: 2rem;
  }
  // 상단 무슨요일
  .react-datepicker__day-names {
    width: 100%;
    ${flexBox("row", "around", "center")}

    font-size: 1.2rem;
  }
  // 일주일
  .react-datepicker__week {
    width: 100%;
    ${flexBox("row", "around", "center")}
    height: 100%;
  }
  // 날짜
  .react-datepicker__day {
    ${flexBox("row", "center", "center")}
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }
  .react-datepicker__day--today {
    color: ${theme.colors.darkPurple};
  }
  .react-datepicker__day:hover {
    background-color: ${theme.colors.ashBlue};
  }
  .react-datepicker__day--selected {
    color: ${theme.colors.white};
    background-color: ${theme.colors.deepPurple};
  }
  .react-datepicker__day--selected:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.deepPurple};
  }
  // 하단 날짜 선택
  .react-datepicker__month {
    ${flexBox("col", "around", "start")}
    width: 100%;
    height: 85%;
    margin: 0;
  }
`;
const WriteDate = ({ nextHandler }: IWriteProps, ref: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (dates: any) => {
    setStartDate(dates);
  };

  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>날짜를 선택해주세요</WriteTitle>
      <DatePickerBox>
        <DatePicker
          selected={startDate}
          locale={ko}
          onChange={onChange}
          inline
        />
      </DatePickerBox>
      <WriteCtrButton rightTitle="다음" rightHandler={nextHandler} />
    </WriteContainer>
  );
};

export default forwardRef(WriteDate);
