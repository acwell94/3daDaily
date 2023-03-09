import { breakPoints } from "@src/styles/media";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import Arrow from "../../../../public/icon/rightArrow.png";
interface IProps {
  src: StaticImageData;
  children: ReactNode;
  handler: () => void;
}

const Container = styled.button`
  ${flexBox("row", "between", "center")}
  width: 98%;
  background-color: ${theme.colors.white};
  box-shadow: 0 0.4rem 0.4rem 0.4rem rgba(97, 100, 187, 0.1);
  padding: 3rem 5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;
  @media ${breakPoints.mobileWidth} {
    padding: 5rem;
    margin-bottom: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    padding: 5rem;
    margin-bottom: 4rem;
  }
`;

const TitleBox = styled.div`
  ${flexBox("row", "center", "center")}
  font-size: 2.6rem;
  font-weight: 400;
  @media ${breakPoints.mobileWidth} {
    font-size: 5rem;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
  }
`;

const ImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-right: 1rem;
  @media ${breakPoints.mobileWidth} {
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 5rem;
    height: 5rem;
    margin-right: 3rem;
  }
`;

const ItemImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ArrowImg = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
  @media ${breakPoints.mobileWidth} {
    width: 4rem;
    height: 4rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 4rem;
    height: 4rem;
  }
`;

const SettingsBox = ({ src, children, handler }: IProps) => {
  return (
    <Container onClick={handler}>
      <TitleBox>
        <ImgBox>
          <ItemImg
            src={src}
            alt=""
            fill={true}
            sizes="(max-width: 500px) 50vw, 100vw"
          />
        </ImgBox>
        {children}
      </TitleBox>
      <ArrowImg src={Arrow} alt="downIcon" />
    </Container>
  );
};

export default SettingsBox;
