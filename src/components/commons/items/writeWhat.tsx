import { IWriteProps } from "@src/components/units/write/WritePresenter";
import { forwardRef } from "react";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import styled from "styled-components";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import WriteCtrButton from "../button/writeCtrButton";
import Image from "next/image";
import { What } from "@src/constants/contents";

const WhatPickBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 3rem 8rem;
  width: 98%;
  height: 100%;
  max-height: 50rem;
`;

const WhatImgBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const WhatItem = styled.div`
  ${flexBox("col", "center", "center")}
  margin-bottom: 4rem;
  cursor: pointer;
`;

const WhatImg = styled(Image)`
  width: 9rem;
  height: 9rem;
  margin-bottom: 2rem;
`;

const WhatImgTitle = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.mainPurple};
  font-weight: 700;
`;

const WriteWhat = ({ prevHandler, nextHandler }: IWriteProps, ref: any) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>무엇을 하셨나요?</WriteTitle>
      <WhatPickBox>
        <WhatImgBox>
          {What.map((el) => (
            <WhatItem key={el.id}>
              <WhatImg src={el.img} alt={el.title} />
              <WhatImgTitle>{el.title}</WhatImgTitle>
            </WhatItem>
          ))}
        </WhatImgBox>
      </WhatPickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="다음"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

export default forwardRef(WriteWhat);
