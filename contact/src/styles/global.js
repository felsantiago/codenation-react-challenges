import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    padding-top: 60px;
    font-family: 'Open Sans', sans-serif;
    background-color: #F8F9FB;
    color: #000;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
  }
`;