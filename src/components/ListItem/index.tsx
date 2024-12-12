import { ListItemContainer } from "./styles";
import { ITask } from "../../App";
import { Trash, CheckCircle, Circle } from "@phosphor-icons/react";

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
    <ListItemContainer>
      {task.isDone ? (
        <>
          <CheckCircle
            size={24}
            color="#8284FA"
            background-color="#f0f0f0"
            weight="fill"
            onClick={handleTaskChecked}
          />
          <s>{task.description}</s>
        </>
      ) : (
        <>
          <Circle size={24} color="#4EA8DE" onClick={handleTaskChecked} />
          <p>{task.description}</p>
        </>
      )}

      <button onClick={handleDeleteTask}>
        <Trash size={16} color="#808080" />
      </button>
    </ListItemContainer>
  );
}
