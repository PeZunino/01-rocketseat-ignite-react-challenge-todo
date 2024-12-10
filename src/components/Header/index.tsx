import { HeaderContainer } from "./styles";
import todoListLogo from "../../assets/rocket.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={todoListLogo} alt="foguete" />
      <p>
        to<span>do</span>
      </p>
    </HeaderContainer>
  );
}
