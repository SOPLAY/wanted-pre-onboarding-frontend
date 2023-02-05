import React, { useState } from 'react';
import * as S from './TodoCreate.styled';
import Input from '@components/common/Input/Input';
import { HiPlus } from 'react-icons/hi';
import useCreateTodo from '@hooks/todo/useCreateTodo';
const TodoCreate = () => {
  const [userTodoInput, setUserTodoInput] = useState('');

  const createTodo = useCreateTodo();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserTodoInput(event.target.value);

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userTodoInput) {
      alert('값을 입력해 주세요!');
    } else {
      const data = { todo: userTodoInput };
      createTodo(data);
      setUserTodoInput('');
    }
  };
  return (
    <S.TodoCreateContainer>
      <S.Form onSubmit={onSubmit}>
        <Input
          data-testid='new-todo-input'
          onChange={onChange}
          value={userTodoInput}
          isValid={true}
        />
        <S.Button data-testid='new-todo-add-button'>
          <HiPlus />
        </S.Button>
      </S.Form>
    </S.TodoCreateContainer>
  );
};

export default TodoCreate;
