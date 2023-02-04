import React, { InputHTMLAttributes } from 'react';
import * as S from './Input.style';
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  'data-testid':
    | 'email-input'
    | 'password-input'
    | 'new-todo-input'
    | 'modify-input';
}
const Input = ({ isValid = false, ...props }: IInput) => {
  return <S.input {...props} isValid={isValid} />;
};

export default Input;
