import cry from "../../public/feeling/cry.png";
import good from "../../public/feeling/good.png";
import happy from "../../public/feeling/happy.png";
import sad from "../../public/feeling/sad.png";
import soso from "../../public/feeling/soso.png";
import surprise from "../../public/feeling/surprise.png";
import tired from "../../public/feeling/tired.png";
import veryGood from "../../public/feeling/veryGood.png";

import cloudy from "../../public/weather/cloudy.png";
import cold from "../../public/weather/cold.png";
import hot from "../../public/weather/hot.png";
import rain from "../../public/weather/rain.png";
import snowfall from "../../public/weather/snowfall.png";
import sunCloud from "../../public/weather/sunCloud.png";
import sunny from "../../public/weather/sunny.png";
import wind from "../../public/weather/wind.png";

import alone from "../../public/WithWhom/alone.png";
import company from "../../public/WithWhom/company.png";
import couple from "../../public/WithWhom/couple.png";
import family from "../../public/WithWhom/family.png";
import friend from "../../public/WithWhom/friend.png";
import pet from "../../public/WithWhom/pet.png";

export interface IData {
  id: number;
  title: string;
  img: any;
  checked: boolean;
}

export const Feeling: IData[] = [
  { id: 0, title: "매우 좋음", img: veryGood, checked: false },
  { id: 1, title: "좋음", img: good, checked: false },
  { id: 2, title: "행복", img: happy, checked: false },
  { id: 3, title: "그럭저럭", img: soso, checked: false },
  { id: 4, title: "나쁨", img: sad, checked: false },
  { id: 5, title: "놀람", img: surprise, checked: false },
  { id: 6, title: "슬픔", img: cry, checked: false },
  { id: 7, title: "피곤", img: tired, checked: false },
];

export const Weather: IData[] = [
  { id: 0, title: "좋음", img: sunny, checked: false },
  { id: 1, title: "흐림", img: sunCloud, checked: false },
  { id: 2, title: "구름", img: cloudy, checked: false },
  { id: 3, title: "비", img: rain, checked: false },
  { id: 4, title: "바람", img: wind, checked: false },
  { id: 5, title: "더움", img: hot, checked: false },
  { id: 6, title: "추움", img: cold, checked: false },
  { id: 7, title: "눈", img: snowfall, checked: false },
];

export const WithWhom: IData[] = [
  { id: 0, title: "혼자", img: alone, checked: false },
  { id: 1, title: "친구", img: friend, checked: false },
  { id: 2, title: "연인", img: couple, checked: false },
  { id: 3, title: "가족", img: family, checked: false },
  { id: 4, title: "동물", img: pet, checked: false },
  { id: 5, title: "동료", img: company, checked: false },
];
