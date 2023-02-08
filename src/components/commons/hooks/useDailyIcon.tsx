import { Feeling, Weather, What, WithWhom } from "@src/constants/contents";

const useDailyIcon = (
  feel: string,
  weather: string,
  who: string,
  what: string,
) => {
  const feelImg: any = Feeling.find((el) => String(el.id) === feel);
  const weatherImg: any = Weather.find((el) => String(el.id) === weather);
  const whoImg: any = WithWhom.find((el) => String(el.id) === who);
  const whatImg: any = What.find((el) => String(el.id) === what);
  return { feelImg, weatherImg, whoImg, whatImg };
};

export default useDailyIcon;
