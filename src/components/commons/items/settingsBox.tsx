import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import DownArrow from "../../../../public/icon/downArrow.png";
interface IProps {
  src: StaticImageData;
  children: ReactNode;
  handler: () => void;
}

const Container = styled.div`
  ${flexBox("row", "between", "center")}
  width: 98%;
  background-color: ${theme.colors.white};
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
  padding: 3rem 5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const TitleBox = styled.div`
  ${flexBox("row", "center", "center")}
  font-size: 2.6rem;
  line-height: 3.3rem;
  font-weight: 400;
`;

const ItemImg = styled(Image)`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

const DownArrowImg = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
  rotate: calc(-90deg);
`;

const SettingsBox = ({ src, children, handler }: IProps) => {
  return (
    <Container onClick={handler}>
      <TitleBox>
        <ItemImg src={src} alt="" />
        {children}
      </TitleBox>
      <DownArrowImg src={DownArrow} alt="downIcon" />
    </Container>
  );
};

export default SettingsBox;
