import React, { ReactNode, createContext, useState } from 'react';
import { ITodoItem } from 'types/todos.types';

export const TodoStateContext = createContext<ITodoItem[] | undefined>(
  undefined
);
export const TodoSetContext = createContext<
  React.Dispatch<React.SetStateAction<ITodoItem[] | undefined>>
>(() => {});

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodoItem[] | undefined>(undefined);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoSetContext.Provider value={setTodos}>
        {children}
      </TodoSetContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
