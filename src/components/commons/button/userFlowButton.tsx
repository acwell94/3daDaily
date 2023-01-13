import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";
interface IProps {
  title?: string;
  isComplete?: boolean;
}

interface StyleProps {
  background?: boolean;
}

const Button = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.background
      ? `${theme.colors.darkPurple}`
      : `${theme.colors.lightPurple}`};
  border-radius: 8px;
  width: 100%;
  padding: 2rem 0;
  color: ${theme.colors.white};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
`;

const UserFlowButton = ({ title, isComplete }: IProps) => {
  return <Button background={isComplete}>{title}</Button>;
};

export default UserFlowButton;
