import styled from "styled-components";

export const StyledInput = styled.input`
  flex: 1;
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  color: ${(props) => props.theme["gray-100"]};
`;
