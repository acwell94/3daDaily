"use client";

import { Feeling, Weather, WithWhom } from "@src/constants/contents";
import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import { memo, useState } from "react";
import styled from "styled-components";

interface IStyleProps {
  open?: boolean;
  category?: string;
  selected?: { category: string; sort: string };
  id?: string;
}

const FilterContainer = styled.div`
  ${flexBox("col", "center", "center")}
  width: 98%;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: 3rem 14rem;
  @media ${breakPoints.mobileWidth} {
    padding: 3rem 7rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 3rem 5rem;
  }
  margin-bottom: 4rem;
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
`;

const Filter = styled.div`
  ${flexBox("row", "start", "center")}
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "start", "center")}
  }
  width: 100%;
`;

const LeftBox = styled.div`
  ${flexBox("col", "center", "center")}

  margin-right: 6rem;
  @media ${breakPoints.mobileWidth} {
    margin-right: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-right: 2rem;
  }
  border-right: 1px solid ${theme.colors.gray};
  @media ${breakPoints.smallScreen} {
    border: none;
    margin: 0;
    margin-bottom: 2rem;
  }
  flex: 2;
`;

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: ${theme.colors.middleGray};
`;

const Count = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 4.4rem;
`;

const RightBox = styled.div`
  ${flexBox("row", "between")}
  font-weight: 500;
  font-size: 2rem;
  word-break: keep-all;
  line-height: 2.5rem;
  flex: 8;
  padding-left: 2rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 1rem;
  }
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "center", "center")}
    text-align: center;
  }
`;

const DownArrowBox = styled.div<IStyleProps>`
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 6rem;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "")};
  cursor: pointer;
  position: relative;
  @media ${breakPoints.mobileWidth} {
    margin-left: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-left: 2rem;
  }
  @media ${breakPoints.smallScreen} {
    margin: 0;
    margin-top: 1rem;
  }
`;

const DownArrow = styled(Image)`
  width: 100%;
  height: 100%;
`;

const OptionBox = styled.div<IStyleProps>`
  ${flexBox("col", "start", "center")}
  display: ${(props) => (props.open ? "flex" : "none")};
  width: 100%;
  margin-top: 3rem;
  @media ${breakPoints.smallScreen} {
    margin-top: 1rem;
  }
`;

const Option = styled.div`
  ${flexBox("row", "start", "center")}
  width: 100%;
  @media ${breakPoints.smallScreen} {
    ${flexBox("col", "start", "center")}
    margin-bottom: 1rem;
  }
`;

const OptionLeftBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-right: 6rem;
  border-right: 1px solid ${theme.colors.gray};
  width: 20%;
  height: 100%;
  @media ${breakPoints.mobileWidth} {
    margin-right: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    margin-right: 2rem;
  }
  @media ${breakPoints.smallScreen} {
    border: none;
    margin: 0;
  }
`;

const OptionFilterTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`;

const OptionRightBoxLimit = styled.div`
  display: flex;
`;

const OptionRightBox = styled.div`
  ${flexBox("row", "start", "center")}
  overflow: scroll;
  width: 80%;
`;

const OptionImgBoxLimit = styled.div<IStyleProps>`
  margin-right: 3rem;
  padding: 1rem;
  width: 8rem;
  height: 8rem;
  box-shadow: ${(props) =>
    props.selected.category === props.category &&
    props.selected.sort === props.id
      ? "0rem 0.2rem 0.3rem #9496c5"
      : null};

  margin-bottom: 1rem;
  margin-left: 1rem;
  border-radius: 20rem;
`;

const OptionImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  padding: 10px;
`;

const OptionImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

interface IProps {
  count: number;
  getSortedContents: (category: string, sort: string) => void;
  selected: { category: string; sort: string };
}

const FilterBox = ({ count, getSortedContents, selected }: IProps) => {
  const [optionOpen, setOptionOpen] = useState(false);
  const optionOpenHandler = () => {
    setOptionOpen((prev) => !prev);
  };
  return (
    <FilterContainer>
      <Filter>
        <LeftBox>
          <LogoText>3다일기</LogoText>
          <Count>{count}</Count>
        </LeftBox>
        <RightBox>
          날씨별, 기분별, 누구와 함께 했는지로 추억을 찾아보세요!
          <DownArrowBox onClick={optionOpenHandler} open={optionOpen}>
            <DownArrow
              src="/icon/downArrow.png"
              alt="downArrow"
              fill={true}
              sizes="(max-width: 500px) 50vw, 100vw"
            />
          </DownArrowBox>
        </RightBox>
      </Filter>
      <OptionBox open={optionOpen}>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>기분</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            <OptionRightBoxLimit>
              {Feeling.map((el) => (
                <OptionImgBoxLimit
                  selected={selected}
                  key={el.id}
                  category="feeling"
                  id={String(el.id)}
                >
                  <OptionImgBox
                    key={el.id}
                    onClick={() => {
                      getSortedContents("feeling", String(el.id));
                    }}
                  >
                    <OptionImg
                      src={el.img}
                      alt={el.title}
                      fill={true}
                      sizes="(max-width: 500px) 50vw, 100vw"
                    />
                  </OptionImgBox>
                </OptionImgBoxLimit>
              ))}
            </OptionRightBoxLimit>
          </OptionRightBox>
        </Option>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>날씨</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            <OptionRightBoxLimit>
              {Weather.map((el) => (
                <OptionImgBoxLimit
                  selected={selected}
                  key={el.id}
                  category="weather"
                  id={String(el.id)}
                >
                  <OptionImgBox
                    onClick={() => {
                      getSortedContents("weather", String(el.id));
                    }}
                  >
                    <OptionImg
                      src={el.img}
                      alt={el.title}
                      fill={true}
                      sizes="(max-width: 500px) 50vw, 100vw"
                    />
                  </OptionImgBox>
                </OptionImgBoxLimit>
              ))}
            </OptionRightBoxLimit>
          </OptionRightBox>
        </Option>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>누구와</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            <OptionRightBoxLimit>
              {WithWhom.map((el) => (
                <OptionImgBoxLimit
                  selected={selected}
                  key={el.id}
                  category="withWhom"
                  id={String(el.id)}
                >
                  <OptionImgBox
                    key={el.id}
                    onClick={() => {
                      getSortedContents("withWhom", String(el.id));
                    }}
                  >
                    <OptionImg
                      src={el.img}
                      alt={el.title}
                      fill={true}
                      sizes="(max-width: 500px) 50vw, 100vw"
                    />
                  </OptionImgBox>
                </OptionImgBoxLimit>
              ))}
            </OptionRightBoxLimit>
          </OptionRightBox>
        </Option>
      </OptionBox>
    </FilterContainer>
  );
};

export default memo(FilterBox);
