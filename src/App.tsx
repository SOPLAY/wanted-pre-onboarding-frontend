import Layout from '@components/layout/Layout';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import TodoProvider from './contexts/todo/TodoProvider';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <TodoProvider>
          <Router />
        </TodoProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
