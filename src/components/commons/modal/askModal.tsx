import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import styled from "styled-components";
import ModalButton from "../button/modalButton";

interface IProps {
  isVisible: boolean;
  title: string;
  warning?: string;
  cancelHandler: () => void;
  successHandler: any;
}

interface IStyleProps {
  isVisible?: boolean;
  warning?: string;
}

const Container = styled.div<IStyleProps>`
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
  width: 100%;
  max-width: 340px;
  max-height: 240px;
  padding: 4rem 3rem;
  background-color: ${theme.colors.white};
  border-radius: 16px;
`;

const ModalTitle = styled.div<IStyleProps>`
  color: ${theme.colors.darkGray};
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  margin-bottom: ${(props) => (props.warning ? "1rem" : "2rem")};
  word-break: keep-all;
`;

const ModalWarning = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;
`;

const ModalButtonBox = styled.div`
  ${flexBox("row", "around", "center")}
  width: 100%;
`;

const AskModal = ({
  isVisible,
  title,
  warning,
  cancelHandler,
  successHandler,
}: IProps) => {
  return (
    <Container isVisible={isVisible}>
      <Modal>
        <ModalTitle warning={warning}>{title}</ModalTitle>
        {warning && <ModalWarning>{warning}</ModalWarning>}
        <ModalButtonBox>
          <ModalButton title="취소" isCancel={true} handler={cancelHandler} />
          <ModalButton title="확인" handler={successHandler} />
        </ModalButtonBox>
      </Modal>
    </Container>
  );
};

export default AskModal;
