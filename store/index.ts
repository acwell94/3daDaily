import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
export const writeFormState = atom({
  key: `${uuidv4()}`,
  default: {
    title: "",
    firstContents: "",
    secondContents: "",
    thirdContents: "",
    date: new Date(),
    weather: "",
    address: "",
    withWhom: "",
    what: "",
    feeling: "",
    image: "",
  },
});
