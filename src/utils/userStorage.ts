import * as Storage from './storage';

export const saveUser = ({ user }: { user: unknown }) => {
  Storage.save({ key: 'user', value: user });
};

export const getUser = () => {
  return Storage.get({ key: 'user' });
};

export const removeUser = () => {
  Storage.remove({ key: 'user' });
};
