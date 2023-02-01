import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  title: string;
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
`;

const ButtonTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.75rem;
  color: ${theme.colors.white};
`;

const SettingsButton = ({ title }: IProps) => {
  return (
    <Button title={title}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
};

export default SettingsButton;
