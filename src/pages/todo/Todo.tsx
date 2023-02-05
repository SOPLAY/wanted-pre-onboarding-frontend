import withAuth from '@utils/hoc/withAuth';
import * as S from './Todo.style';
import TodoCreate from '@components/todo/todoCreate/TodoCreate';
import TodoList from '@components/todo/todoList/TodoList';
const Todo = () => {
  return (
    <S.TodoRootContainer>
      <S.TodoContainer>
        <TodoCreate />
        <TodoList />
      </S.TodoContainer>
    </S.TodoRootContainer>
  );
};

export default withAuth(Todo);
