import { api } from 'apis/index.ts';
import { Signup } from 'types/auth';

export const signupUser = async (data: Signup) => {
  const response = await api.post<Signup>('/register', data);
  return response.data;
};
