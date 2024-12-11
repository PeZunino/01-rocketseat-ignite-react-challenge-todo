import styled from "styled-components";

export const EmptyElementContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-300"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 4rem;
    margin-bottom: 1rem;
    height: 3.5rem;
  }
`;
