import apis from '@apis/index';
import useGetTodos from './useGetodos';

const useDeleteTodo = () => {
  const getTodos = useGetTodos();
  const deleteTodo = (id: number) =>
    apis.todo.deleteTodo(id).then(() => {
      getTodos();
    });
  return deleteTodo;
};

export default useDeleteTodo;
