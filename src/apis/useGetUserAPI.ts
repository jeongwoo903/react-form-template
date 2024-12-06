import {api} from 'apis/index.ts';
import {useQuery} from '@tanstack/react-query';

export const useGetUserAPI = () => {
  const getUser = async () => {
    const res = await api.get(`/users`);
    return res.data;
  };

  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUser(),
    retry: 3,
  });
};
