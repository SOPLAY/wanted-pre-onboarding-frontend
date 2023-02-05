import apis from '@apis/index';
import { IUpdateTodo } from '@apis/todoApis';
import useGetTodos from './useGetodos';

const useUpdateTodo = () => {
  const getTodos = useGetTodos();
  const updateTodo = (data: IUpdateTodo, id: number) =>
    apis.todo.updateTodo(data, id).then(() => {
      getTodos();
    });

  return updateTodo;
};

export default useUpdateTodo;
