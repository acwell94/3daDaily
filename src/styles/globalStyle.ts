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
  html {
    font-size: 10px;
    
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
