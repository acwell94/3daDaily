"use client";

export interface IData {
  id: number;
  title: string;
  img: any;
  category: string;
}

export const Feeling: IData[] = [
  {
    id: 0,
    title: "매우 좋음",
    img: "/feeling/veryGood.png",
    category: "feeling",
  },
  { id: 1, title: "좋음", img: "/feeling/good.png", category: "feeling" },
  { id: 2, title: "행복", img: "/feeling/happy.png", category: "feeling" },
  {
    id: 3,
    title: "그럭저럭",
    img: "/feeling/soso.png",
    category: "feeling",
  },
  { id: 4, title: "나쁨", img: "/feeling/sad.png", category: "feeling" },
  { id: 5, title: "놀람", img: "/feeling/surprise.png", category: "feeling" },
  { id: 6, title: "슬픔", img: "/feeling/cry.png", category: "feeling" },
  { id: 7, title: "피곤", img: "/feeling/tired.png", category: "feeling" },
];

export const Weather: IData[] = [
  { id: 0, title: "좋음", img: "/weather/sunny.png", category: "weather" },
  { id: 1, title: "흐림", img: "/weather/sunCloud.png", category: "weather" },
  { id: 2, title: "구름", img: "/weather/cloudy.png", category: "weather" },
  { id: 3, title: "비", img: "/weather/rain.png", category: "weather" },
  { id: 4, title: "바람", img: "/weather/wind.png", category: "weather" },
  { id: 5, title: "더움", img: "/weather/hot.png", category: "weather" },
  { id: 6, title: "추움", img: "/weather/cold.png", category: "weather" },
  { id: 7, title: "눈", img: "/weather/snowfall.png", category: "weather" },
];

export const WithWhom: IData[] = [
  { id: 0, title: "혼자", img: "/withWhom/alone.png", category: "withWhom" },
  { id: 1, title: "친구", img: "/withWhom/friend.png", category: "withWhom" },
  { id: 2, title: "연인", img: "/withWhom/couple.png", category: "withWhom" },
  { id: 3, title: "가족", img: "/withWhom/family.png", category: "withWhom" },
  { id: 4, title: "동물", img: "/withWhom/pet.png", category: "withWhom" },
  { id: 5, title: "동료", img: "/withWhom/company.png", category: "withWhom" },
];

export const What: IData[] = [
  {
    id: 0,
    title: "데이트",
    img: "/what/date.png",
    category: "what",
  },
  {
    id: 1,
    title: "ㅎㅎㅎ",
    img: "/what/secret.png",
    category: "what",
  },
  { id: 2, title: "운동", img: "/what/exercise.png", category: "what" },
  { id: 3, title: "게임", img: "/what/game.png", category: "what" },
  { id: 4, title: "잠", img: "/what/sleep.png", category: "what" },
  {
    id: 5,
    title: "개산책",
    img: "/what/petging.png",
    category: "what",
  },
  { id: 6, title: "요리", img: "/what/cooking.png", category: "what" },
  { id: 7, title: "독서", img: "/what/reading.png", category: "what" },
  { id: 8, title: "여행", img: "/what/trip.png", category: "what" },
  { id: 9, title: "산책", img: "/what/walk.png", category: "what" },
  {
    id: 10,
    title: "업무",
    img: "/what/work.png",
    category: "what",
  },
  {
    id: 11,
    title: "청소",
    img: "/what/cleaning.png",
    category: "what",
  },
  {
    id: 12,
    title: "카페",
    img: "/what/cafe.png",
    category: "what",
  },
  {
    id: 13,
    title: "회의",
    img: "/what/conference.png",
    category: "what",
  },
  {
    id: 14,
    title: "코딩",
    img: "/what/programming.png",
    category: "what",
  },
  {
    id: 15,
    title: "음악",
    img: "/what/music.png",
    category: "what",
  },
  {
    id: 16,
    title: "영화",
    img: "/what/movies.png",
    category: "what",
  },
  {
    id: 17,
    title: "공부",
    img: "/what/studying.png",
    category: "what",
  },
];
