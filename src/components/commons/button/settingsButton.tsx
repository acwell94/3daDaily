import { breakPoints } from "@src/styles/media";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  title: string;
  handler?: any;
}

interface IStyleProps {
  title: string;
}

const Button = styled.div<IStyleProps>`
  background-color: ${(props) =>
    props.title === "삭제"
      ? `${theme.colors.mainPurple}`
      : `${theme.colors.deepPurple}`};
  border-radius: 8px;
  padding: 1rem 5rem;
  cursor: pointer;
  @media ${breakPoints.mobileWidth} {
    padding: 2rem 5rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 2rem 5rem;
  }
`;

const ButtonTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 400;

  color: ${theme.colors.white};
  @media ${breakPoints.mobileWidth} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
  }
`;

const SettingsButton = ({ title, handler }: IProps) => {
  return (
    <Button title={title} onClick={handler}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
};

export default SettingsButton;
