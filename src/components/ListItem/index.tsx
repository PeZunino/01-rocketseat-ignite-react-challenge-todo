import { ListItemContainer } from "./styles";
import { ITask } from "../../App";
import { Trash, Check } from "@phosphor-icons/react";

interface IListItem {
  task: ITask;
  onDeleteTask: (taskToDeleteId: number) => void;
  onTaskChecked: (taskToDeleteId: number) => void;
}

export function ListItem({ task, onDeleteTask, onTaskChecked }: IListItem) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleTaskChecked() {
    onTaskChecked(task.id);
  }

  return (
    <ListItemContainer isDone={task.isDone}>
      <label onClick={handleTaskChecked} htmlFor="input">
        <input type="checkbox" checked={task.isDone} readOnly />
        <div>{task.isDone && <Check size={12} weight="bold" />} </div>
      </label>

      <p>{task.description}</p>

      <button onClick={handleDeleteTask}>
        <Trash size={16} color="#808080" />
      </button>
    </ListItemContainer>
  );
}
