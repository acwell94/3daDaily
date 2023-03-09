import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  title: string;
  isLast?: boolean;
  isDark?: boolean;
  handler: () => void;
}

interface IStyleProps {
  isLast?: boolean;
  isDark?: boolean;
}

const ButtonContainer = styled.button<IStyleProps>`
  ${flexBox("row", "center", "center")}
  flex: 1;
  background-color: ${(props) =>
    props.isDark ? `${theme.colors.deepPurple}` : `${theme.colors.mainPurple}`};
  border-radius: 8px;
  margin-right: ${(props) => (props.isLast ? 0 : "2rem")};
  padding: 2rem 0;
  cursor: pointer;
`;
const ButtonTitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: ${theme.colors.white};
`;

const DetailButton = ({ title, isLast, isDark, handler }: IProps) => {
  return (
    <ButtonContainer isLast={isLast} isDark={isDark} onClick={handler}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default DetailButton;
