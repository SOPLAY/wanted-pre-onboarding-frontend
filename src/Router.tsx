import { Navigate, Route, Routes } from 'react-router-dom';
import pages from './pages';

const Router = () => (
  <Routes>
    <Route path='/' element={<Navigate to={'/auth/signin'} />} />
    <Route path='auth'>
      <Route path='signin' element={<pages.auth.SignIn />} />
      <Route path='signup' element={<pages.auth.SignUp />} />
    </Route>
    <Route path='todo' element={<pages.todos.Todo />}></Route>
  </Routes>
);

export default Router;
