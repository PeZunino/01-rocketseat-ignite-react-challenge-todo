import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  padding-top: 4.5rem;
  padding-bottom: 5rem;

  background-color: ${(props) => props.theme["gray-700"]};

  p {
    font-size: 2.5rem;
    font-weight: 900;

    margin-left: 0.75rem;
    margin-right: calc(
      0.75rem + 1.375rem
    ); //centralizar o texto (margin left + largura da img)

    color: ${(props) => props.theme["blue-100"]};
  }

  span {
    color: ${(props) => props.theme["purple-200"]};
  }
`;
