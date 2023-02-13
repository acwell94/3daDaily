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
`;

const ProfileImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const UserEmail = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.75rem;
`;

const FriendList = ({ data, buttonTitle, buttonHandler }: IProps) => {
  return (
    <Container>
      <InfoBox>
        <ProfileImgBox>
          <ProfileImg
            src={`http://localhost:5000/${data.profileImg}`}
            alt={`${data.email}`}
            fill={true}
            sizes="(max-width: 500px) 50vw, 100vw"
          />
        </ProfileImgBox>
        <UserEmail>{data.name}</UserEmail>
      </InfoBox>
      <SettingsButton title={buttonTitle} handler={buttonHandler} />
    </Container>
  );
};

export default FriendList;
