import React, { useState } from 'react';
import * as S from './TodoItem.style';
import { HiCheck, HiChevronLeft, HiPencil, HiX } from 'react-icons/hi';
import useDeleteTodo from '@hooks/todo/useDeleteTodo';
import useUpdateTodo from '@hooks/todo/useUpdateTodo';

interface ITodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}
const TodoItem = ({ id, todo: todoFetchValue, isCompleted }: ITodoItem) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoItem, setTodoItem] = useState({
    isCompleted,
    todo: todoFetchValue,
  });

  const deleteTodo = useDeleteTodo();

  //refetch false로 설정
  const updateTodo = useUpdateTodo(false);

  const onEditClick = () => {
    setIsEdit(!isEdit);
  };

  const onEditCancel = () => {
    const isCancel = window.confirm(`수정을 취소 하시겠습니까?`);
    if (isCancel) {
      setTodoItem({ isCompleted, todo: todoFetchValue });
      onEditClick();
    }
  };

  const onUpdateTodoClick = (
    type: 'checkBox' | 'input',
    checked = todoItem.isCompleted
  ) => {
    updateTodo({ ...todoItem, isCompleted: checked }, id);
    type === 'input' && onEditClick();
  };

  const onDelete = () => {
    const isDelete = window.confirm(`${todoItem.todo}를 삭제 하시겠습니까?`);
    isDelete && deleteTodo(id);
  };

  return (
    <S.TodoItemContainer>
      <S.Label>
        <S.TodoCheckBox
          type='checkbox'
          checked={todoItem.isCompleted}
          onChange={(e) => {
            setTodoItem({ ...todoItem, isCompleted: e.target.checked });
            onUpdateTodoClick('checkBox', e.target.checked);
          }}
        />
        {!isEdit ? (
          <S.TodoText checked={todoItem.isCompleted}>
            {todoItem.todo}
          </S.TodoText>
        ) : (
          <S.TodoInput
            data-testid='modify-input'
            value={todoItem.todo}
            onChange={(e) => setTodoItem({ ...todoItem, todo: e.target.value })}
          />
        )}
      </S.Label>
      <S.Container>
        {!isEdit ? (
          <>
            <S.Button data-testid='modify-button' className='text-green-600'>
              <HiPencil onClick={onEditClick} />
            </S.Button>
            <S.Button
              data-testid='delete-button'
              className='text-2xl text-red-600'
              onClick={onDelete}
            >
              <HiX />
            </S.Button>
          </>
        ) : (
          <>
            <S.Button
              data-testid='submit-button'
              className='text-green-600'
              onClick={() => onUpdateTodoClick('input')}
            >
              <HiCheck />
            </S.Button>
            <S.Button
              data-testid='cancel-button'
              className='text-red-600 '
              onClick={onEditCancel}
            >
              <HiChevronLeft />
            </S.Button>
          </>
        )}
      </S.Container>
    </S.TodoItemContainer>
  );
};
export default React.memo(TodoItem);
