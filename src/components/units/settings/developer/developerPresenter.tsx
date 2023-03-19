import LogoItem from "@src/components/commons/items/logoItem";
import Image from "next/image";
import DeveloperImg from "public/developer/developer.png";

import * as S from "./developerStyles";

const DeveloperPresenter = () => {
  return (
    <S.Main>
      <LogoItem />
      <S.DeveloperContainer>
        <S.DeveloperBox>
          <S.DeveloperImgBox>
            <Image
              src={DeveloperImg}
              alt="developer"
              fill={true}
              style={{ borderRadius: "2rem" }}
            />
          </S.DeveloperImgBox>
          <S.DeveloperInfo>
            <S.TitleText>김민영</S.TitleText>
            <S.SubTitleText>흔적을 남기는 개발자[구직중]</S.SubTitleText>
            <S.SubTitleText>leminyoung122@gmail.com</S.SubTitleText>
            <>
              <S.DevelopButton
                addStyle={{ backgroundColor: "#1EC997", titleColor: "white" }}
                onClick={() => window.open("https://velog.io/@acwell94")}
              >
                블로그
              </S.DevelopButton>
              <S.DevelopButton
                addStyle={{
                  backgroundColor: "#181717",
                  titleColor: "white",
                  margin: "0 2rem",
                }}
                onClick={() => window.open("https://github.com/acwell94")}
              >
                깃허브
              </S.DevelopButton>
            </>
            <S.SmallText>궁금한 사항이 있으시면 연락주세요.</S.SmallText>
          </S.DeveloperInfo>
        </S.DeveloperBox>
      </S.DeveloperContainer>
    </S.Main>
  );
};

export default DeveloperPresenter;
