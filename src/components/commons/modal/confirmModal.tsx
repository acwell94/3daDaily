"use client";
import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";
import ModalButton from "../button/modalButton";

interface IProps {
  title: string;

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
  max-width: 34rem;
  /* max-height: 24rem; */
  min-width: 20rem;
  padding: 4rem 3rem;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  @media ${breakPoints.mobileWidth} {
    padding: 6rem 5rem;

    max-width: 64rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 6rem 5rem;

    max-width: 56rem;
  }
`;

const ModalTitle = styled.div`
  color: ${theme.colors.darkGray};
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  white-space: pre-wrap;
  word-break: keep-all;
  @media ${breakPoints.mobileWidth} {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
`;

const ConfirmModal = ({ title, isVisible, handler, buttonTitle }: IProps) => {
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
