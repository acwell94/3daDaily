import { atom } from "recoil";

export const writeFormState = atom({
  key: "writeFormState",
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
