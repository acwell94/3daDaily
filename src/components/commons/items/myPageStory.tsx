import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
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
  id: string;
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
  @media ${breakPoints.smallScreen} {
    height: 90rem;
  }
  @media ${breakPoints.foldScreen} {
    height: 70rem;
  }
`;

const DateBox = styled.div`
  ${flexBox("row", "center", "center")}
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 40%;
  gap: 2rem;
  @media ${breakPoints.smallScreen} {
    height: 30%;
    gap: 4rem;
  }
`;

const Month = styled.div`
  color: ${theme.colors.sliverGray};
  font-size: 2rem;
  font-weight: 400;
  @media ${breakPoints.smallScreen} {
    font-size: 3rem;
  }
`;

const Date = styled.div`
  font-size: 5rem;
  line-height: 7.5rem;
  font-weight: 700;
  @media ${breakPoints.smallScreen} {
    font-size: 7rem;
  }
`;

const Day = styled.div`
  font-size: 2rem;
  font-weight: 400;
  @media ${breakPoints.smallScreen} {
    font-size: 3rem;
  }
`;

const ImgBox = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
  position: relative;
  height: 60%;
  border-bottom: 1px solid ${theme.colors.gray};
  @media ${breakPoints.smallScreen} {
    height: 70%;
  }
`;

const StoryImg = styled(Image)`
  border-radius: 8px 8px 0 0;
`;

const MyPageStory = ({ data, id }: IProps) => {
  const router = useRouter();

  const linkToDetail = () => {
    router.push(`/detail/${id}`);
  };
  const { month, date, day } = useDateForm(data.date);

  return (
    <Container onClick={linkToDetail}>
      <ImgBox>
        <StoryImg
          src={`http://localhost:5000/${data.image}`}
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

export default memo(MyPageStory);
