"use client";

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
    img: "/feeling/veryGood.png",
    checked: false,
  },
  { id: 1, title: "좋음", img: "/feeling/good.png", checked: false },
  { id: 2, title: "행복", img: "/feeling/happy.png", checked: false },
  {
    id: 3,
    title: "그럭저럭",
    img: "/feeling/soso.png",
    checked: false,
  },
  { id: 4, title: "나쁨", img: "/feeling/sad.png", checked: false },
  { id: 5, title: "놀람", img: "/feeling/surprise.png", checked: false },
  { id: 6, title: "슬픔", img: "/feeling/cry.png", checked: false },
  { id: 7, title: "피곤", img: "/feeling/tired.png", checked: false },
];

export const Weather: IData[] = [
  { id: 0, title: "좋음", img: "/weather/sunny.png", checked: false },
  { id: 1, title: "흐림", img: "/weather/sunCloud.png", checked: false },
  { id: 2, title: "구름", img: "/weather/cloudy.png", checked: false },
  { id: 3, title: "비", img: "/weather/rain.png", checked: false },
  { id: 4, title: "바람", img: "/weather/wind.png", checked: false },
  { id: 5, title: "더움", img: "/weather/hot.png", checked: false },
  { id: 6, title: "추움", img: "/weather/cold.png", checked: false },
  { id: 7, title: "눈", img: "/weather/snowfall.png", checked: false },
];

export const WithWhom: IData[] = [
  { id: 0, title: "혼자", img: "/withWhom/alone.png", checked: false },
  { id: 1, title: "친구", img: "/withWhom/friend.png", checked: false },
  { id: 2, title: "연인", img: "/withWhom/couple.png", checked: false },
  { id: 3, title: "가족", img: "/withWhom/family.png", checked: false },
  { id: 4, title: "동물", img: "/withWhom/pet.png", checked: false },
  { id: 5, title: "동료", img: "/withWhom/company.png", checked: false },
];

export const What: IData[] = [
  {
    id: 0,
    title: "데이트",
    img: "/what/date.png",
    checked: false,
  },
  {
    id: 1,
    title: "ㅎㅎㅎ",
    img: "/what/secret.png",
    checked: false,
  },
  { id: 2, title: "운동", img: "/what/exercise.png", checked: false },
  { id: 3, title: "게임", img: "/what/game.png", checked: false },
  { id: 4, title: "잠", img: "/what/sleep.png", checked: false },
  {
    id: 5,
    title: "개산책",
    img: "/what/petging.png",
    checked: false,
  },
  { id: 6, title: "요리", img: "/what/cooking.png", checked: false },
  { id: 7, title: "독서", img: "/what/reading.png", checked: false },
  { id: 8, title: "여행", img: "/what/trip.png", checked: false },
  { id: 9, title: "산책", img: "/what/walk.png", checked: false },
  {
    id: 10,
    title: "업무",
    img: "/what/work.png",
    checked: false,
  },
  {
    id: 11,
    title: "청소",
    img: "/what/cleaning.png",
    checked: false,
  },
  {
    id: 12,
    title: "카페",
    img: "/what/cafe.png",
    checked: false,
  },
  {
    id: 13,
    title: "회의",
    img: "/what/conference.png",
    checked: false,
  },
  {
    id: 14,
    title: "코딩",
    img: "/what/programming.png",
    checked: false,
  },
  {
    id: 15,
    title: "음악",
    img: "/what/music.png",
    checked: false,
  },
  {
    id: 16,
    title: "영화",
    img: "/what/movies.png",
    checked: false,
  },
  {
    id: 17,
    title: "공부",
    img: "/what/studying.png",
    checked: false,
  },
];
