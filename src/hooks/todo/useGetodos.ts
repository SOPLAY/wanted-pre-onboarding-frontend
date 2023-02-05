import apis from '@apis/index';
import { TodoSetContext } from '@contexts/todo/TodoProvider';
import { useContext } from 'react';

const useGetTodos = () => {
  const setTodos = useContext(TodoSetContext);

  const updateTodos = () =>
    apis.todo.getTodo().then((res) => {
      setTodos(res.data);
    });

  return updateTodos;
};

export default useGetTodos;
