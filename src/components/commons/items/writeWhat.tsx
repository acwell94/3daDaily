import { forwardRef } from "react";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import styled from "styled-components";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import WriteCtrButton from "../button/writeCtrButton";
import Image from "next/image";
import { IPickImageProps } from "@src/components/units/write/WritePresenter";
import { breakPoints } from "@src/styles/media";

interface IStyle {
  current?: boolean;
}
const WhatPickBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 4rem 6rem;
  width: 98%;
  height: 100%;
  max-height: 50rem;
`;

const WhatImgBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20% 20% 20% 20% 20%;
  padding: 2rem;
  grid-row-gap: 4rem;
  width: 100%;
  overflow-y: scroll;
  @media ${breakPoints.mobileHeight} {
    grid-template-columns: 20% 20% 20% 20%;
  }
  @media ${breakPoints.smallScreen} {
    grid-template-columns: 20% 20% 20% 20%;
  }
`;

const WhatItem = styled.div<IStyle>`
  ${flexBox("col", "center", "center")}

  cursor: pointer;
  box-shadow: ${(props) =>
    props.current ? `0px 0px 1rem rgba(97, 100, 187, 0.3)` : null};
  padding: 1rem 0;
  border-radius: 2rem;
`;

const WhatImgLimit = styled.div`
  width: 9rem;
  height: 9rem;
  margin-bottom: 2rem;
  position: relative;
  @media ${breakPoints.mobileHeight} {
    width: 8rem;
    height: 8rem;
  }
  @media ${breakPoints.smallScreen} {
    width: 7rem;
    height: 7rem;
  }
`;

const WhatImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const WhatImgTitle = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.mainPurple};
  font-weight: 700;
  word-break: keep-all;
  text-align: center;
`;

const WriteWhat = (
  {
    current,
    refName,
    title,
    imgData,
    prevHandler,
    nextHandler,
    handler,
  }: IPickImageProps,
  ref: any,
) => {
  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>{title}</WriteTitle>
      <WhatPickBox>
        <WhatImgBox>
          {imgData.map((el) => (
            <WhatItem
              key={el.id}
              onClick={(e) => handler(refName, String(el.id))}
              id={`${el.id}`}
              current={current ? current === String(el.id) : null}
            >
              <WhatImgLimit>
                <WhatImg
                  src={el.img}
                  alt={el.title}
                  fill={true}
                  sizes="(max-width: 500px) 50vw, 100vw"
                />
              </WhatImgLimit>
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
