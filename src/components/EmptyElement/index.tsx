import { EmptyElementContainer } from "./styles";
import clipboard from "../../assets/clipboard.svg";

export function EmptyElement() {
  return (
    <EmptyElementContainer>
      <img src={clipboard} alt="clipboard" />
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </span>
    </EmptyElementContainer>
  );
}
