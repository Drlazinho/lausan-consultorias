import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;

    p{
      font-size: 18px;
    }

    h2{
      font-size: 25px;
    }

    ul{
      font-size: 18px;
    }
  }
`;