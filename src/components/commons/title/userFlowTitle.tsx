import theme from "@src/utils/theme";
import styled from "styled-components";
interface IProps {
  title: string;
}

const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 700;
  color: ${theme.colors.darkGray};
  margin-bottom: 4rem;
`;

const UserFlowTitle = ({ title }: IProps) => {
  return <Title>{title}</Title>;
};

export default UserFlowTitle;
