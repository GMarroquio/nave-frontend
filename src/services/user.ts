import { UserProps } from 'pages/Home';
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

export const getAll = async () => {
  const { data } = await api.get('/navers');
  return data;
};

export const getUser = async ({ id }: { id: string }) => {
  const { data } = await api.get(`/navers/${id}`);
  return data;
};

export const createUser = async (user: UserProps) => {
  const { admission_date, birthdate } = user;

  await api.post('/navers', {
    ...user,
    admission_date: admission_date.split('-').reverse().join('/'),
    birthdate: birthdate.split('-').reverse().join('/')
  });
};

export const updateUser = async ({
  user,
  id
}: {
  user: UserProps;
  id: string;
}) => {
  const { admission_date, birthdate } = user;

  await api.put(`/navers/${id}`, {
    ...user,
    admission_date: admission_date.split('-').reverse().join('/'),
    birthdate: birthdate.split('-').reverse().join('/')
  });
};

export const deleteNaver = async ({ id }: { id: string }) => {
  await api.delete(`/navers/${id}`);
};
