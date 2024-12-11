import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import clipboard from "./assets/clipboard.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <main>
        <div>
          <input placeholder="Adicionar uma nova tarefa"></input>
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <section>
          <header>
            <span>
              Tarefas criadas <span>0</span>
            </span>

            <span>
              Concluídas <span>0</span>
            </span>
          </header>

          <div>
            <img src={clipboard} alt="clipboard" />
            <span>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </section>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
