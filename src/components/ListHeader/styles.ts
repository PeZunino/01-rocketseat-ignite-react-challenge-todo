import styled from "styled-components";

export const StyledHeader = styled.header`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 1.5rem;

  > span:nth-child(1) {
    color: ${(props) => props.theme["blue-100"]};
  }
  > span:nth-child(2) {
    color: ${(props) => props.theme["purple-100"]};
  }
  span > span {
    background-color: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    border-radius: 999px;
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
  }
`;
