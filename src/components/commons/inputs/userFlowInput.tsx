"use client";
import { breakPoints } from "@src/styles/media";
import theme from "@src/utils/theme";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  type?: any;
  name?: string;
  placeholder?: string;
  error?: string;
  isLast?: boolean;
  register?: any;
  inputHandler?: (data: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = styled.div<IProps>`
  /* margin-bottom: ${(props) => (props.isLast ? "0px" : "3rem")}; */
`;

const Input = styled.input`
  width: 60rem;
  @media ${breakPoints.mobileWidth} {
    width: 100%;
  }
  @media ${breakPoints.mobileHeight} {
    width: 100%;
  }
  border: 1px solid #999999;
  border-radius: 8px;
  padding: 2rem 3rem;
  font-size: 2rem;
  @media ${breakPoints.mobileWidth} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 1rem;
  }
  font-weight: 600;
  margin-bottom: 1rem;

  ::placeholder {
    color: ${theme.colors.blackGray};
    @media ${breakPoints.mobileWidth} {
      font-size: 1rem;
    }
    @media ${breakPoints.mobileHeight} {
      font-size: 1rem;
    }
  }
`;
const Error = styled.div<IProps>`
  visibility: ${(props) => (props.error ? "visible" : "hidden")};
  color: ${theme.colors.red};
  height: 1.6rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-bottom: 3rem;
`;

const UserFlowInput = ({
  type,
  name,
  placeholder,
  error,
  isLast,
  register,
  inputHandler,
}: IProps) => {
  return (
    <InputBox isLast={isLast}>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(`${name}`)}
        onChange={inputHandler}
      />
      <Error error={error}>{error}</Error>
    </InputBox>
  );
};

export default UserFlowInput;
