import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { login } from '../services/user';
import { getUser, removeUser, saveUser } from '../utils/userStorage';

interface UserProps {
  signed: boolean;
  token: string;
  email: string;
  id: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ContextProps {
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  logout: () => void;
  login: ({ email, password }: LoginRequest) => Promise<void>;
  user: UserProps | null;
}

export const UserContext = createContext({} as ContextProps);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({
  children
}: {
  children: React.ReactChild;
}) => {
  const [user, setUser] = useState<UserProps | null>({} as UserProps);

  const logout = () => {
    removeUser();
    setUser(null);
  };

  const loginUser = async (credentials: LoginRequest) => {
    const user = await login(credentials);
    setUser({ signed: true, ...user });
    saveUser({ user: { signed: true, ...user } });
  };

  useEffect(() => {
    const user = getUser();
    if (user) setUser(user);
    //eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        login: loginUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
