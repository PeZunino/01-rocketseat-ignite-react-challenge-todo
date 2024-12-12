import { Circle, Trash, CheckCircle } from "phosphor-react";
import { ListItemContainer } from "./styles";
import { ITask } from "../../App";
import { useState } from "react";

interface IListItem {
  task: ITask;
  onDeleteTask: (taskToDeleteId: number) => void;
  onTaskChecked: (taskToDeleteId: number) => void;
}

export function ListItem({ task, onDeleteTask, onTaskChecked }: IListItem) {
  const [isHovered, setIsHovered] = useState(false);

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

      <Trash
        size={24}
        color={isHovered ? "#E25858" : "#808080"}
        onClick={handleDeleteTask}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </ListItemContainer>
  );
}
