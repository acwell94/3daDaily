"use client";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  type?: any;
  placeholder?: string;
  error?: string;
  isLast?: boolean;
  register?: any;
}

const InputBox = styled.div<IProps>`
  /* margin-bottom: ${(props) => (props.isLast ? "0px" : "3rem")}; */
`;

const Input = styled.input`
  width: 60rem;
  border: 1px solid #999999;
  border-radius: 8px;
  padding: 2rem 3rem;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  ::placeholder {
    color: ${theme.colors.blackGray};
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
  placeholder,
  error,
  isLast,
  register,
}: IProps) => {
  return (
    <InputBox isLast={isLast}>
      <Input type={type} placeholder={placeholder} {...register} />
      <Error error={error}>{error}</Error>
    </InputBox>
  );
};

export default UserFlowInput;
