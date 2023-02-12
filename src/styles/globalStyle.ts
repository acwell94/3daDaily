"use client";

import theme from "@src/utils/theme";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  html,
  body {
    width: 100%;
    height: 100%;
  }
  // largePc
  @media all and (min-width: 1920px){
    html {
      font-size: 10px;
    }
  }
  // mediumPc
  @media all and (min-width: 1200px) and (max-width:1919.99px) {
    html {
      font-size: 8px;
    }
  }
  // smallPc
  @media all and (min-width: 992px) and (max-width:1199.99px) {
    html {
      font-size: 6px;
    }
  }
  // tablet
  @media all and (min-width: 768px) and (max-width:991.99px) {
    html {
      font-size: 5px;
    }
  }
  // mobileWidth
  @media all and (min-width: 576px) and (max-width:767.99px) {
    html {
      font-size: 4px;
    }
  }
  // mobileHeight
  @media all and  (max-width:577px) {
    html {
      font-size: 4px;
    }
  }

  #root {
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }
  input{
    outline: none;
  }
  a, a:visited {
    text-decoration: none;
    color: black;
  }
  &::-webkit-scrollbar {
    display: none;
    width: 10px;
    height: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.mainPurple};
    border-radius: 50px;
  }

`;

export default GlobalStyle;
