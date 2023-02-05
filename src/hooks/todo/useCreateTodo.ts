import apis from '@apis/index';
import { ICreateTodo } from '@apis/todoApis';
import useGetTodos from './useGetodos';
import useUpdateTodo from './useUpdateTodo';

const useCreateTodo = () => {
  const getTodos = useGetTodos();

  const createTodo = (data: ICreateTodo) =>
    apis.todo.createTodo(data).then(() => {
      getTodos();
    });
  return createTodo;
};

export default useCreateTodo;
