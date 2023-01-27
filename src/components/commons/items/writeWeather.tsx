import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import { forwardRef } from "react";
import styled from "styled-components";
import LogoItem from "./logoItem";

const Container = styled.div`
  ${flexBox("col", "start", "center")}
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  color: ${theme.colors.lightGray};
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.8rem;
  margin-bottom: 4rem;
`;

const WeatherPickBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 2rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 20rem;
  width: 100%;
  height: 100%;
  max-height: 50rem;
`;
const WriteWeather = ({}, ref: any) => {
  return (
    <Container ref={ref}>
      <LogoItem />
      <Title>오늘 날씨는 어땠나요?</Title>
      <WeatherPickBox></WeatherPickBox>
    </Container>
  );
};

export default forwardRef(WriteWeather);
