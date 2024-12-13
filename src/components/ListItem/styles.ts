import styled from "styled-components";

export const ListItemContainer = styled.div<{ isDone: boolean }>`
  display: flex;
  align-items: center;

  height: 4.5rem;
  border-radius: 8px;
  padding: 1rem;

  margin-bottom: 0.75rem;

  font-size: 0.875rem;

  border: 1px solid ${(props) => props.theme["gray-400"]};
  background-color: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  p {
    margin-left: 1rem;
    flex: 1;
    transition: opacity 0.2s;
    user-select: none;
    ${(props) =>
      props.isDone &&
      `
      opacity: 0.5; 
      text-decoration: line-through;
      
    `}
  }

  input {
    display: none;
  }
  label > div {
    border-radius: 100%;
    height: 1.093rem;
    width: 1.093rem;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["blue-100"]};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s background-color;

    ${(props) =>
      props.isDone &&
      `
      background-color: ${props.theme["purple-100"]};
      border: none;
    `}

    &:hover {
      background-color: rgba(30, 111, 159, 0.2);
    }
  }

  button {
    border: 0;
    padding: 5px 4px 2px 4px;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.2s background-color;
  }
  button path {
    transition: 0.2s fill;
  }
  button:hover {
    background-color: ${(props) => props.theme["gray-400"]};
  }
  button:hover path {
    fill: ${(props) => props.theme["red"]};
  }
  path {
    transition: 0.2s fill;
  }
`;
