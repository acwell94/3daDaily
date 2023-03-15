import styled from "styled-components";
import theme from "@src/utils/theme";
import { flexBox } from "@src/utils/flexBox";
import { useState } from "react";
import useInterval from "@src/components/commons/hooks/useInterval";
import { useRouter } from "next/router";
import Image from "next/image";
const Main = styled.div`
  ${flexBox("col", "center", "center")}
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.ashBlue};
`;

const ErrorImgBox = styled.div`
  position: relative;
  width: 30rem;
  height: 40rem;
  margin-bottom: 2rem;
`;

const Warning = styled.div`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  font-size: 3rem;
`;

const CountText = styled.span`
  color: ${theme.colors.red};
`;

const Custom404Page = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useInterval(() => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      router.back();
    }
  }, 1000);

  return (
    <Main>
      <ErrorImgBox>
        <Image src={"/notFoundUrl.png"} alt="errorImg" fill={true} />
      </ErrorImgBox>
      <Warning>입력하신 주소를 찾을 수 없습니다.</Warning>
      <Info>
        <CountText>{count}</CountText>초 뒤에 이전화면으로 돌아갑니다.
      </Info>
    </Main>
  );
};

export default Custom404Page;
