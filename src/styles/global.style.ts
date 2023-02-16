import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    color: #0b2239;
    font-weight: 400;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    background-color: #f9f9f9;
  }
  body {
    font-size: 0.625rem;
    line-height: 1;
    font-family: "Poppins", sans-serif;
  }
  a {
    color: #0b2239;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  label {
    display: block;
  }
  button,
  input,
  select {
    background: none;
    border: none;
    outline: none;
    display: block;
  }
  .common_wrapper{
    width: 1110px;
    margin: 0 auto;
  }
  .App {
    margin-top: 90px;
  }
  .flex_box {
    display: flex;
  }
  .flex_left {
    margin-left: auto;
  }
  .flex_right {
    margin-right: auto;
  }
  .bg_color_main {
    background-color: #e0234d;
  }
  .bg_color_sub {
    background-color: #00dd6d;
  }
  .bg_color_white {
    background-color: #fff;
  }
  .ft_color_main {
    color: #e0234d;
  }
  .ft_color_sub {
    color: #00dd6d;
  }
  .ft_color_white {
    color: #fff;
  }
  .al_center{
    align-items:center;
  }
  .modal_background {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10001;
  }
`;
