import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";
import TestImg from "../../../../public/testImg/tImg.jpg";
import TestStatusImg1 from "../../../../public/weather/sunny.png";
import TestStatusImg2 from "../../../../public/feeling/cry.png";
import TestStatusImg3 from "../../../../public/withWhom/alone.png";

const Container = styled.div`
  ${flexBox("row", "start", "center")}
  width: 98%;
  height: 20rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
  border-radius: 8px;
  margin-bottom: 4rem;
  cursor: pointer;
`;

const DateBox = styled.div`
  ${flexBox("col", "center", "center")}
  border-radius: 8px 0px 0px 8px;
  height: 100%;
  flex: 3;
`;

const Month = styled.div`
  color: ${theme.colors.sliverGray};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
`;

const Date = styled.div`
  font-size: 6rem;
  line-height: 7.5rem;
  font-weight: 700;
`;

const Day = styled.div`
  font-size: 2.2rem;
  line-height: 2.8rem;
  font-weight: 400;
`;

const ImgBox = styled.div`
  ${flexBox("row", "center", "center")}
  flex: 6;
  position: relative;
  height: 20rem;
`;

const StoryImg = styled(Image)`
  border-radius: 0 8px 8px 0;
`;

const MyPageStory = () => {
  return (
    <Container>
      <DateBox>
        <Month>JAN</Month>
        <Date>18</Date>
        <Day>WED</Day>
      </DateBox>
      <ImgBox>
        <StoryImg src={TestImg} alt="피드이미지" fill={true} />
      </ImgBox>
    </Container>
  );
};

export default MyPageStory;
