import { useRefClick } from "@src/components/commons/hooks/useRefCtr";
import LogoItem from "@src/components/commons/items/logoItem";
import WriteDate from "@src/components/commons/items/writeDate";
import WriteWeather from "@src/components/commons/items/writeWeather";
import {
  WriteMain,
  LogoMainBox,
} from "@src/components/commons/styles/commonStyles";
import { useRef } from "react";

const WritePresenter = ({}) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const weatherRef = useRef<HTMLInputElement>(null);

  return (
    <WriteMain>
      <LogoMainBox>
        <WriteDate ref={dateRef} nextHandler={useRefClick(weatherRef)} />
        <WriteWeather ref={weatherRef} />
      </LogoMainBox>
    </WriteMain>
  );
};

export default WritePresenter;
