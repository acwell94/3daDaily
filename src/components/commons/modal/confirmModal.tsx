"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";
import ModalButton from "../button/modalButton";

interface IProps {
  title: string;
  type?: string;
  isVisible: boolean;
  handler: () => void;
  buttonTitle: string;
}

interface StyleProps {
  isVisible: boolean;
}

const Container = styled.div<StyleProps>`
  ${flexBox("row", "center", "center")}
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 10rem 0;
  background: ${theme.colors.modalBackGround};
  z-index: 999;
`;

const Modal = styled.div`
  ${flexBox("col", "center", "center")}
  max-width: 340px;
  max-height: 240px;
  padding: 4rem 3rem;
  background-color: ${theme.colors.white};
  border-radius: 16px;
`;

const ModalTitle = styled.div`
  color: ${theme.colors.darkGray};
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const ConfirmModal = ({
  title,
  type,
  isVisible,
  handler,
  buttonTitle,
}: IProps) => {
  return (
    <Container isVisible={isVisible}>
      <Modal>
        <ModalTitle>{title}</ModalTitle>
        <ModalButton handler={handler} title={buttonTitle} />
      </Modal>
    </Container>
  );
};

export default ConfirmModal;
