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
  
  :focus {
    outline: 1px solid #5e60ce;
  }

  main{
    max-width: 46rem;
    margin: 0 auto;
  }
  
  main > div{
    height: 3.375rem;
    gap: 0.5rem;
    display: flex;
    margin-top: calc(0px - 1.6875rem);
  }

 
 
`;
