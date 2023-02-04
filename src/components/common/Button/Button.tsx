import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.style';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'xl';
  color?: 'error' | 'success' | 'disable';
  'data-testid'?:
    | 'signup-button'
    | 'signin-button'
    | 'new-todo-add-button'
    | 'modify-button'
    | 'delete-button'
    | 'submit-button'
    | 'cancel-buttons';
}

const Button = ({
  children,
  size = 'md',
  color = 'success',
  ...props
}: IButton) => {
  return (
    <S.button {...props} size={size} color={color}>
      {children}
    </S.button>
  );
};

export default Button;
