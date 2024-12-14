import { ITask } from "../../App";
import { StyledHeader } from "./styles";
interface ListHeaderProps {
  taskList: ITask[];
}
export function ListHeader({ taskList }: ListHeaderProps) {
  const taskDoneList = taskList.reduce(
    (accumulator, task) => (task.isDone ? accumulator + 1 : accumulator),
    0
  );
  return (
    <StyledHeader>
      <span>
        Tarefas criadas <span>{taskList.length}</span>
      </span>

      <span>
        Concluídas{" "}
        <span>
          {taskDoneList} de {taskList.length}
        </span>
      </span>
    </StyledHeader>
  );
}
