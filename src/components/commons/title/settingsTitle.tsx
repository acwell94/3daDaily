import theme from "@src/utils/theme";
import { ReactNode } from "react";
import styled from "styled-components";
interface IProps {
  children: ReactNode;
}

const Title = styled.div`
  width: 98%;
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.darkGray};
  margin-bottom: 5rem;
`;

const SettingsTitle = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};

export default SettingsTitle;
