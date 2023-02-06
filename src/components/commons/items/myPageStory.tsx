import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";
import TestImg from "../../../../public/testImg/tImg.jpg";
import useDateForm from "../hooks/useDateForm";

interface IProps {
  data: {
    address: string;
    creator: string;
    date: string;
    feeling: string;
    firstContents: string;
    secondContents: string;
    thirdContents: string;
    id: string;
    image: string;
    location: {
      lat: number;
      lng: number;
    };
    title: string;
    weather: string;
    what: string;
    withWhom: string;
    _id: string;
  };
}

const Container = styled.div`
  ${flexBox("col", "start", "start")}
  width: 100%;
  height: 40rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
  border-radius: 8px;
  margin-bottom: 4rem;
  cursor: pointer;
`;

const DateBox = styled.div`
  ${flexBox("col", "center", "center")}
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 40%;
`;

const Month = styled.div`
  color: ${theme.colors.sliverGray};
  font-size: 2rem;
  font-weight: 400;
`;

const Date = styled.div`
  font-size: 5rem;
  line-height: 7.5rem;
  font-weight: 700;
`;

const Day = styled.div`
  font-size: 2rem;
  font-weight: 400;
`;

const ImgBox = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
  position: relative;
  height: 60%;
`;

const StoryImg = styled(Image)`
  border-radius: 8px 8px 0 0;
`;

const MyPageStory = ({ data }: IProps) => {
  const { month, date, day } = useDateForm(data.date);

  return (
    <Container>
      <ImgBox>
        <StoryImg
          src={data.image}
          alt="피드이미지"
          fill={true}
          sizes="(max-width: 500px) 50vw, 100vw"
        />
      </ImgBox>
      <DateBox>
        <Month>{month}</Month>
        <Date>{date}</Date>
        <Day>{day}</Day>
      </DateBox>
    </Container>
  );
};

export default MyPageStory;
