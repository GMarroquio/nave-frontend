import { api } from './api';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const { data } = await api.post('/users/login', { email, password });

  console.log(data);

  return data;
};
