import { StyledHeader } from "./styles";

export function ListHeader() {
  return (
    <StyledHeader>
      <span>
        Tarefas criadas <span>0</span>
      </span>

      <span>
        Concluídas <span>0</span>
      </span>
    </StyledHeader>
  );
}
