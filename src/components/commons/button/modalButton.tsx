"use client";
import theme from "@src/utils/theme";
import styled from "styled-components";

interface IProps {
  handler: () => void;
}

const Button = styled.div`
  width: 40%;
  padding: 1rem 0;
  background-color: ${theme.colors.lightGray};
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
`;

const ButtonTitle = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

const ModalButton = ({ handler }: IProps) => {
  return (
    <Button onClick={handler}>
      <ButtonTitle>확인</ButtonTitle>
    </Button>
  );
};

export default ModalButton;
