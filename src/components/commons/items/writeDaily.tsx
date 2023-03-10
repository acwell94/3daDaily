import { ChangeEvent, forwardRef } from "react";
import WriteCtrButton from "../button/writeCtrButton";

import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import styled from "styled-components";
import theme from "@src/utils/theme";
import { flexBox } from "@src/utils/flexBox";
import { breakPoints } from "@src/styles/media";

interface IWriteProps {
  prevHandler?: () => void;
  createHandler?: () => void;
  changeHandler: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  defaultTitle: string;
  first: string;
  second: string;
  third: string;
  isEdit: boolean;
  editContentsHandler: () => void;
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
  font-size: 3rem;
  border: none;
  ::placeholder {
    color: ${theme.colors.sliverGray};
    padding-left: 0.3rem;
  }
  @media ${breakPoints.mobileWidth} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 5rem;
  }
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
  @media ${breakPoints.mobileWidth} {
    padding: 5rem 8rem;
    max-height: 70rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 5rem 8rem;
    max-height: 70rem;
  }
  @media ${breakPoints.smallScreen} {
    padding: 5rem 6rem;
  }
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
  font-size: 2.4rem;
  margin-bottom: 1rem;
  ::placeholder {
    color: ${theme.colors.sliverGray};
    padding-left: 0.3rem;
  }
  @media ${breakPoints.mobileWidth} {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 5rem;
  }
`;

const LimitCharacter = styled.div<IStyle>`
  font-size: 1.8rem;
  color: ${(props) => (props.warning ? `${theme.colors.red}` : null)};
  @media ${breakPoints.mobileWidth} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 3rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 3rem;
  }
`;

const WriteDaily = (
  {
    prevHandler,
    createHandler,
    changeHandler,
    defaultTitle,
    first,
    second,
    third,

    isEdit,
    editContentsHandler,
  }: IWriteProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>?????? ????????? ?????? ???????????? ???????????????!</WriteTitle>
      <TitleInputBox>
        <TitleInput
          placeholder="20??? ????????? ????????? ??????????????????."
          onChange={(e) => changeHandler(e, "title")}
          maxLength={20}
          defaultValue={defaultTitle ? defaultTitle : null}
        />
      </TitleInputBox>
      <DailyPickBox>
        <InputBox>
          <DailyContents
            placeholder="??? ?????? ?????? ??????????????????."
            onChange={(e) => changeHandler(e, "firstContents")}
            maxLength={30}
            defaultValue={first ? first : null}
          />
          <LimitCharacter warning={first?.length === 30}>
            {first?.length}/ 30
          </LimitCharacter>
        </InputBox>
        <InputBox>
          <DailyContents
            placeholder="??? ?????? ?????? ??????????????????."
            onChange={(e) => changeHandler(e, "secondContents")}
            maxLength={30}
            defaultValue={second ? second : null}
          />
          <LimitCharacter warning={second?.length === 30}>
            {second?.length}/ 30
          </LimitCharacter>
        </InputBox>
        <InputBox>
          <DailyContents
            placeholder="??? ?????? ?????? ??????????????????."
            onChange={(e) => changeHandler(e, "thirdContents")}
            maxLength={30}
            defaultValue={third ? third : null}
          />
          <LimitCharacter warning={third?.length === 30}>
            {third?.length}/ 30
          </LimitCharacter>
        </InputBox>
      </DailyPickBox>
      <WriteCtrButton
        leftTitle="??????"
        rightTitle={isEdit ? "??????" : "??????"}
        leftHandler={prevHandler}
        rightHandler={isEdit ? editContentsHandler : createHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WriteDaily);
