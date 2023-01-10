import { css } from "styled-components";

const flexDirection = (value?: string) => {
  switch (value) {
    case "col":
      return "column";
    case "row":
      return "row";
  }
};

const convertFullName = (value?: string) => {
  switch (value) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "center":
      return "center";
    default:
      return value;
  }
};

export function flexBox(fd?: string | undefined, jc?: string, ai?: string) {
  return css`
    display: flex;
    flex-direction: ${flexDirection(fd)};
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `;
}
