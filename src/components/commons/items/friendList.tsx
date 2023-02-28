import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import Image from "next/image";
import styled from "styled-components";
import SettingsButton from "../button/settingsButton";

interface IProps {
  data: any;
  id: string;
  buttonTitle: string;
  buttonHandler?: any;
}

const Container = styled.div`
  ${flexBox("row", "between", "center")}
  padding: 1rem;
`;

const InfoBox = styled.div`
  ${flexBox("row", "center", "center")}
`;

const ProfileImgBox = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
  position: relative;
  @media ${breakPoints.mobileWidth} {
    width: 10rem;
    height: 10rem;
    margin-right: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 10rem;
    height: 10rem;
    margin-right: 4rem;
  }
`;

const ProfileImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #a6a6a6a6;
`;

const UserName = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
`;

const FriendList = ({ data, buttonTitle, buttonHandler }: IProps) => {
  return (
    <Container>
      <InfoBox>
        <ProfileImgBox>
          <ProfileImg
            src={data?.profileImg}
            alt={`${data.email}`}
            fill={true}
            sizes="(max-width: 500px) 50vw, 100vw"
          />
        </ProfileImgBox>
        <UserName>{data.name}</UserName>
      </InfoBox>
      <SettingsButton title={buttonTitle} handler={buttonHandler} />
    </Container>
  );
};

export default FriendList;
