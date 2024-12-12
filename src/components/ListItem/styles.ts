import styled from "styled-components";

export const ListItemContainer = styled.div`
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

  p,
  s {
    margin-left: 1rem;
    flex: 1;
  }

  svg {
    cursor: pointer;
  }
`;
