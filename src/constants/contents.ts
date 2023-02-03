"use client";
// import cry from "../../public/feeling/cry.png";
// import good from "../../public/feeling/good.png";
// import happy from "../../public/feeling/happy.png";
// import sad from "../../public/feeling/sad.png";
// import soso from "../../public/feeling/soso.png";
// import surprise from "../../public/feeling/surprise.png";
// import tired from "../../public/feeling/tired.png";
// import veryGood from "../../public/feeling/veryGood.png";

// import cloudy from "../../public/weather/cloudy.png";
// import cold from "../../public/weather/cold.png";
// import hot from "../../public/weather/hot.png";
// import rain from "../../public/weather/rain.png";
// import snowfall from "../../public/weather/snowfall.png";
// import sunCloud from "../../public/weather/sunCloud.png";
// import sunny from "../../public/weather/sunny.png";
// import wind from "../../public/weather/wind.png";

// import alone from "../../public/WithWhom/alone.png";
// import company from "../../public/WithWhom/company.png";
// import couple from "../../public/WithWhom/couple.png";
// import family from "../../public/WithWhom/family.png";
// import friend from "../../public/WithWhom/friend.png";
// import pet from "../../public/WithWhom/pet.png";

// import date from "../../public/what/date.png";
// import secret from "../../public/what/secret.png";
// import exercise from "../../public/what/exercise.png";
// import game from "../../public/what/game.png";
// import sleep from "../../public/what/sleep.png";
// import petging from "../../public/what/petging.png";
// import cooking from "../../public/what/cooking.png";
// import reading from "../../public/what/reading.png";
// import trip from "../../public/what/trip.png";
// import walk from "../../public/what/walk.png";
// import work from "../../public/what/work.png";
// import cleaning from "../../public/what/cleaning.png";
// import cafe from "../../public/what/cafe.png";
// import conference from "../../public/what/conference.png";
// import programming from "../../public/what/programming.png";
// import music from "../../public/what/music.png";
// import movies from "../../public/what/movies.png";
// import studying from "../../public/what/studying.png";

export interface IData {
  id: number;
  title: string;
  img: any;
  checked: boolean;
}

export const Feeling: IData[] = [
  {
    id: 0,
    title: "매우 좋음",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  { id: 1, title: "좋음", img: "../../public/feeling/cry.png", checked: false },
  { id: 2, title: "행복", img: "../../public/feeling/cry.png", checked: false },
  {
    id: 3,
    title: "그럭저럭",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  { id: 4, title: "나쁨", img: "../../public/feeling/cry.png", checked: false },
  { id: 5, title: "놀람", img: "../../public/feeling/cry.png", checked: false },
  { id: 6, title: "슬픔", img: "../../public/feeling/cry.png", checked: false },
  { id: 7, title: "피곤", img: "../../public/feeling/cry.png", checked: false },
];

export const Weather: IData[] = [
  { id: 0, title: "좋음", img: "../../public/feeling/cry.png", checked: false },
  { id: 1, title: "흐림", img: "../../public/feeling/cry.png", checked: false },
  { id: 2, title: "구름", img: "../../public/feeling/cry.png", checked: false },
  { id: 3, title: "비", img: "../../public/feeling/cry.png", checked: false },
  { id: 4, title: "바람", img: "../../public/feeling/cry.png", checked: false },
  { id: 5, title: "더움", img: "../../public/feeling/cry.png", checked: false },
  { id: 6, title: "추움", img: "../../public/feeling/cry.png", checked: false },
  { id: 7, title: "눈", img: "../../public/feeling/cry.png", checked: false },
];

export const WithWhom: IData[] = [
  { id: 0, title: "혼자", img: "../../public/feeling/cry.png", checked: false },
  { id: 1, title: "친구", img: "../../public/feeling/cry.png", checked: false },
  { id: 2, title: "연인", img: "../../public/feeling/cry.png", checked: false },
  { id: 3, title: "가족", img: "../../public/feeling/cry.png", checked: false },
  { id: 4, title: "동물", img: "../../public/feeling/cry.png", checked: false },
  { id: 5, title: "동료", img: "../../public/feeling/cry.png", checked: false },
];

export const What: IData[] = [
  {
    id: 0,
    title: "데이트",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 1,
    title: "ㅎㅎㅎ",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  { id: 2, title: "운동", img: "../../public/feeling/cry.png", checked: false },
  { id: 3, title: "게임", img: "../../public/feeling/cry.png", checked: false },
  { id: 4, title: "잠", img: "../../public/feeling/cry.png", checked: false },
  {
    id: 5,
    title: "개산책",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  { id: 6, title: "요리", img: "../../public/feeling/cry.png", checked: false },
  { id: 7, title: "독서", img: "../../public/feeling/cry.png", checked: false },
  { id: 8, title: "여행", img: "../../public/feeling/cry.png", checked: false },
  { id: 9, title: "산책", img: "../../public/feeling/cry.png", checked: false },
  {
    id: 10,
    title: "업무",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 11,
    title: "청소",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 12,
    title: "카페",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 13,
    title: "회의",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 14,
    title: "코딩",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 15,
    title: "음악",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 16,
    title: "영화",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
  {
    id: 17,
    title: "공부",
    img: "../../public/feeling/cry.png",
    checked: false,
  },
];
