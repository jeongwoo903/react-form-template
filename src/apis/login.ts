import { Login } from 'types/auth';
import { api } from 'apis/index.ts';

export const loginUser = async (data: Login) => {
  const response = await api.post<Login>('/login', data);
  return response.data;
};
