import useGetTodos from '@hooks/todo/useGetodos';
import useTodos from '@hooks/todo/useTodos';
import { useEffect } from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoItemLoading from '../todoItem/TodoItemLoading';

const TodoList = () => {
  const todos = useTodos();
  const getTodos = useGetTodos();

  useEffect(() => {
    todos === undefined && getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <ul>
      {todos
        ? todos.map((todoData) => <TodoItem {...todoData} key={todoData.id} />)
        : Array.from({ length: 10 }).map((v, index) => (
            <TodoItemLoading key={index} />
          ))}
    </ul>
  );
};

export default TodoList;
