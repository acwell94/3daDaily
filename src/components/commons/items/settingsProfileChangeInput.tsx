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
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 2rem 3rem;
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: 8px;
  color: ${theme.colors.blackGray};
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;

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
