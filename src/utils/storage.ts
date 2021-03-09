export const save = ({ key, value }: { key: string; value: unknown }) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = ({ key }: { key: string }) => {
  const store = localStorage.getItem(key);
  if (store) return JSON.parse(store);
  else return null;
};

export const clear = () => {
  localStorage.clear();
};

export const remove = ({ key }: { key: string }) => {
  localStorage.removeItem(key);
};
