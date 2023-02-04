import axios from '@utils/axios';
import { AxiosResponse } from 'axios';
import { ITodoItem } from 'types/todos.types';

interface ICreateTodo {
  todo: string;
}
interface IUpdateTodo extends ICreateTodo {
  isCompleted: boolean;
}

const createTodo = (body: ICreateTodo): Promise<AxiosResponse<ITodoItem>> =>
  axios.post('/todos', body);

const getTodo = (): Promise<AxiosResponse<ITodoItem[]>> => axios.get('/todos');

const updateTodo = (
  id: number,
  body: IUpdateTodo
): Promise<AxiosResponse<ITodoItem>> => axios.put(`/todos/${id}`, body);

const deleteTodo = (id: number) => axios.delete(`/todos/${id}`);

export { createTodo, getTodo, updateTodo, deleteTodo };
