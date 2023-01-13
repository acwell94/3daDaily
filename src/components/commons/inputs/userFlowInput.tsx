import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  placeholder?: string;
  error?: string;
  isLast?: boolean;
}

const InputBox = styled.div<IProps>`
  margin-bottom: ${(props) => (props.isLast ? "0px" : "3rem")};
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
const Error = styled.div`
  color: ${theme.colors.red};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const UserFlowInput = ({ placeholder, error, isLast }: IProps) => {
  return (
    <InputBox isLast={isLast}>
      <Input placeholder={placeholder} />
      <Error>{error}</Error>
    </InputBox>
  );
};

export default UserFlowInput;
