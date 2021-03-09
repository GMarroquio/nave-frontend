import * as Storage from './storage';

export const saveUser = ({ user }: { user: unknown }) => {
  console.log(user);
  Storage.save({ key: 'user', value: user });
};

export const getUser = () => {
  return Storage.get({ key: 'user' });
};

export const removeUser = () => {
  Storage.remove({ key: 'user' });
};
