import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,input,textarea,button{
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body{
    background: ${(props) => props.theme["gray-600"]};
  }
`;
