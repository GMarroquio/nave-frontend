import { api } from './api';

interface LoginResponse {
  data: {
    email: string;
    id: string;
    token: string;
  };
}

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const { data }: LoginResponse = await api.post('/users/login', {
    email,
    password
  });

  return data;
};
