import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  handler?: () => void;
}

const Button = styled.button`
  ${flexBox("row", "center", "center")}
  padding: 1.6rem 5rem;
  background-color: ${theme.colors.deepPurple};
  border-radius: 8px;
  cursor: pointer;
  @media ${breakPoints.mobileWidth} {
    padding: 2rem 5rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 2rem 5rem;
  }
  @media ${breakPoints.smallScreen} {
    padding: 3rem 5rem;
  }
`;
const FirstText = styled.div`
  font-size: 2rem;
  color: ${theme.colors.white};
  @media ${breakPoints.mobileWidth} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 3rem;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 4rem;
  }
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
