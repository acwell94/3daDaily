"use client";

import { Feeling, Weather, WithWhom } from "@src/constants/contents";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import downArrow from "../../../../public/downArrow.png";

interface IStyleProps {
  open?: boolean;
}

const FilterContainer = styled.div`
  ${flexBox("col", "center", "center")}
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: 3rem 14rem;
`;

const Filter = styled.div`
  ${flexBox("row", "start", "center")}
  width: 100%;
`;

const LeftBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-right: 6rem;
  border-right: 1px solid ${theme.colors.gray};
  flex: 2;
`;

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 400;
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
  line-height: 2.5rem;
  flex: 8;
`;

const DownArrowBox = styled.div<IStyleProps>`
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 6rem;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "")};
  cursor: pointer;
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
`;

const Option = styled.div`
  ${flexBox("row", "start", "center")}
  width: 100%;
`;

const OptionLeftBox = styled.div`
  ${flexBox("col", "center", "center")}
  margin-right: 6rem;
  border-right: 1px solid ${theme.colors.gray};
  flex: 2;
  height: 6.6rem;
`;

const OptionFilterTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`;

const OptionRightBox = styled.div`
  ${flexBox("row")}
  flex: 8;
`;

const OptionImg = styled(Image)`
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
`;

const FilterBox = () => {
  const [optionOpen, setOptionOpen] = useState(false);
  const optionOpenHandler = () => {
    setOptionOpen((prev) => !prev);
  };
  return (
    <FilterContainer>
      <Filter>
        <LeftBox>
          <LogoText>3다일기</LogoText>
          <Count>215</Count>
        </LeftBox>
        <RightBox>
          날씨별, 기분별, 누구와 함께 했는지로 추억을 찾아보세요!
          <DownArrowBox onClick={optionOpenHandler} open={optionOpen}>
            <DownArrow src={downArrow} alt="downArrow" />
          </DownArrowBox>
        </RightBox>
      </Filter>
      <OptionBox open={optionOpen}>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>기분</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            {Feeling.map((el) => (
              <OptionImg src={el.img} alt={el.title} key={el.id} />
            ))}
          </OptionRightBox>
        </Option>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>날씨</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            {Weather.map((el) => (
              <OptionImg src={el.img} alt={el.title} key={el.id} />
            ))}
          </OptionRightBox>
        </Option>
        <Option>
          <OptionLeftBox>
            <OptionFilterTitle>누구와</OptionFilterTitle>
          </OptionLeftBox>
          <OptionRightBox>
            {WithWhom.map((el) => (
              <OptionImg src={el.img} alt={el.title} key={el.id} />
            ))}
          </OptionRightBox>
        </Option>
      </OptionBox>
    </FilterContainer>
  );
};

export default FilterBox;
