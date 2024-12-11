import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
export function Button({
  children,
  onClick,
  disabled,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
