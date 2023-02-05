import { TodoStateContext } from '@contexts/todo/TodoProvider';
import { useContext } from 'react';

const useTodos = () => {
  const todos = useContext(TodoStateContext);

  return todos;
};

export default useTodos;
