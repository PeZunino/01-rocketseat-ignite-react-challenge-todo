import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ListHeader } from "./components/ListHeader";
import { useState } from "react";
import { EmptyElement } from "./components/EmptyElement";
import { ListItem } from "./components/ListItem";

export interface ITask {
  id: number;
  description: string;
  isDone: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>([
    { description: "Minha tarefa", id: new Date().getTime(), isDone: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleNewTask() {
    const newTask: ITask = {
      id: new Date().getTime(),
      description: inputValue,
      isDone: false,
    };

    setTaskList([...taskList, newTask]);
    setInputValue("");
  }

  function onDeleteTask(taskToDeleteId: number) {
    const newTaskList = taskList.filter((task) => task.id != taskToDeleteId);

    setTaskList(newTaskList);
  }

  function onTaskChecked(taskToDeleteId: number) {
    const updatedTaskList = taskList.map((task) =>
      task.id == taskToDeleteId ? { ...task, isDone: !task.isDone } : task
    );
    setTaskList(updatedTaskList);
  }

  const isNewTaskDescriptionEmpty = inputValue.length == 0;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <main>
        <div>
          <Input
            placeholder="Adicionar uma nova tarefa"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <Button onClick={handleNewTask} disabled={isNewTaskDescriptionEmpty}>
            Criar
            <PlusCircle size={16} />
          </Button>
        </div>

        <section>
          <ListHeader taskList={taskList} />

          {taskList.length > 0 ? (
            taskList.map((task) => (
              <ListItem
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onTaskChecked={onTaskChecked}
              />
            ))
          ) : (
            <EmptyElement />
          )}
        </section>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
