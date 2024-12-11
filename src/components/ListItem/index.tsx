import { Circle, Trash } from "phosphor-react";
import { ListItemContainer } from "./styles";

interface IListItem {
  description: string;
}

export function ListItem({ description }: IListItem) {
  return (
    <ListItemContainer>
      <Circle size={24} color="#4EA8DE" />
      <p>{description}</p>
      <Trash size={24} color="#808080" />
    </ListItemContainer>
  );
}
