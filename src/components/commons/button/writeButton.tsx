import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  handler?: () => void;
}

const Button = styled.div`
  ${flexBox("row", "center", "center")}
  padding: 1.6rem 5rem;
  background-color: ${theme.colors.deepPurple};
  border-radius: 8px;
  cursor: pointer;
`;
const FirstText = styled.div`
  font-size: 2rem;
  color: ${theme.colors.white};
`;

const SecondText = styled(FirstText)`
  font-weight: 700;
`;

const WriteButton = ({ handler }: IProps) => {
  return (
    <Button onClick={handler}>
      <FirstText>3줄일기</FirstText>
      <SecondText>쓰러가기</SecondText>
    </Button>
  );
};

export default WriteButton;
