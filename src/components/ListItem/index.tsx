import { Circle, Trash } from "phosphor-react";
import { ListItemContainer } from "./styles";
import { ITask } from "../../App";
import { useState } from "react";

interface IListItem {
  task: ITask;
  onDeleteTask: (taskToDeleteId: number) => void;
}

export function ListItem({ task, onDeleteTask }: IListItem) {
  const [isHovered, setIsHovered] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <ListItemContainer>
      <Circle size={24} color="#4EA8DE" />
      <p>{task.description}</p>
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
