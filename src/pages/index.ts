import SignIn from './auth/signIn/SignIn';
import SignUp from './auth/signUp/SignUp';
import Todo from './todo/Todo';
const pages = {
  auth: { SignIn, SignUp },
  todos: { Todo },
};

export default pages;
