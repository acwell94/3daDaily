import theme from "@src/utils/theme";
import { ReactNode } from "react";
import styled from "styled-components";
interface IProps {
  children: ReactNode;
}

const Title = styled.div`
  width: 100%;
  height: 7rem;
  font-size: 2.6rem;
  font-weight: 500;
  color: ${theme.colors.darkGray};
  margin-bottom: 2rem;
  padding-top: 4rem;
  border-top: 1px solid ${theme.colors.inputBorder};
`;

const SettingsSubTitle = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};

export default SettingsSubTitle;
