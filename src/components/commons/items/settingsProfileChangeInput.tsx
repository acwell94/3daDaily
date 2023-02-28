import { breakPoints } from "@src/styles/media";
import theme from "@src/utils/theme";
import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  disabled?: boolean;
  placeHolder?: string;
  value?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  max?: number;
}

interface IStyleProps {
  disabled?: boolean;
}

const Container = styled.div<IStyleProps>`
  width: 98%;
  margin-bottom: ${(props) => (props.disabled ? "6rem" : "3rem")};
  @media ${breakPoints.mobileWidth} {
    margin-bottom: ${(props) => (props.disabled ? "10rem" : "5rem")};
  }
  @media ${breakPoints.mobileHeight} {
    margin-bottom: ${(props) => (props.disabled ? "10rem" : "5rem")};
  }
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 2rem 3rem;
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: 8px;
  color: ${theme.colors.blackGray};
  font-size: 2rem;
  font-weight: 500;

  ::placeholder {
    color: ${theme.colors.blackGray};
  }
  :disabled {
    background-color: ${theme.colors.sliverGray};
    border: 1px solid ${theme.colors.sliverGray};
    ::placeholder {
      color: ${theme.colors.gray};
    }
  }
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
  }
`;

const SettingsProfileChangeInput = ({
  children,
  disabled,
  placeHolder,
  value,
  onChangeHandler,
  max,
}: IProps) => {
  return (
    <Container disabled={disabled}>
      <Title>{children}</Title>
      <Input
        placeholder={placeHolder}
        disabled={disabled || false}
        value={value}
        onChange={onChangeHandler}
        maxLength={max}
      />
    </Container>
  );
};

export default SettingsProfileChangeInput;
