import withAuth from '@utils/hoc/withAuth';
import * as S from './Todo.style';
import TodoCreate from '@components/todo/todoCreate/TodoCreate';
import TodoList from '@components/todo/todoList/TodoList';
import TodoProvider from '@contexts/todo/TodoProvider';
const Todo = () => {
  return (
    <TodoProvider>
      <S.TodoRootContainer>
        <S.TodoContainer>
          <TodoCreate />
          <TodoList />
        </S.TodoContainer>
      </S.TodoRootContainer>
    </TodoProvider>
  );
};

export default withAuth(Todo);
