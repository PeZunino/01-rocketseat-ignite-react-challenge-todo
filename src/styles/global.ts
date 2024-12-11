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
    outline: transparent;
  }

  main{
    padding: 0rem 22rem ;
  }
  main > div{
    height: 3.375rem;
    gap: 0.5rem;
    
    display: flex;
    margin-top: calc(0px - 1.6875rem);

    input{
      flex: 1;
      background-color: ${(props) => props.theme["gray-500"]};
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme["gray-700"]};;
      padding: 1rem;
    }
    
    button{
      width: 5.625rem;
      background-color: ${(props) => props.theme["blue-200"]};
      color: ${(props) => props.theme["gray-100"]};
      border-radius: 8px;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  section{
    margin-top: 4rem;

  }

  section > header{
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    >span:nth-child(1){
      color: ${(props) => props.theme["blue-100"]};
    }
    >span:nth-child(2){
      color: ${(props) => props.theme["purple-100"]};
    }
    span > span{
      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-200"]};
      border-radius: 999px;
      font-size: 0.75rem ;
      padding: 0.125rem 0.5rem;
    }
  }

  section > div{
    border-top: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
    margin-top:1.5rem;
    color: ${(props) => props.theme["gray-300"]};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin-top: 4rem;
      margin-bottom: 1rem;
      height: 3.5rem;
    }
  }
  /* main > div {
    display:flex;
    
    margin: 0 auto;
    gap: 0.5rem;

    height: 3.375rem;
    width: 46rem;
    
    background-color: ${(props) => props.theme["gray-500"]};
  }
    
  input{
    flex:1;
  }
  button{
    width: 5.625rem;
  } */
  /* border:0; */
`;
