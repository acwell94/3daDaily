import { flexBox } from "@src/utils/flexBox";
import Image from "next/image";
import styled from "styled-components";
import SettingsButton from "../button/settingsButton";

interface IProps {
  data: any;
  id: string;
  buttonTitle: string;
}

const Container = styled.div`
  ${flexBox("row", "between", "center")}

  padding: 1rem;
  /* margin-bottom: 2rem; */
`;

const InfoBox = styled.div`
  ${flexBox("row", "center", "center")}
`;

const ProfileImg = styled(Image)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

const UserEmail = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.75rem;
`;

const FriendList = ({ data, id, buttonTitle }: IProps) => {
  return (
    <Container>
      <InfoBox>
        <ProfileImg src={data.img} alt={`${data.email}`} />
        <UserEmail>{data.email}</UserEmail>
      </InfoBox>
      <SettingsButton title={buttonTitle} />
    </Container>
  );
};

export default FriendList;
