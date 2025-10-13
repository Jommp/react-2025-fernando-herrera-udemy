import { createContext, useState, type PropsWithChildren } from 'react';
import { users, type User } from '../data/user.mock.data';

type AuthenticatedStatus = 'checking' | 'authenticated' | 'not-autheticated';

interface UserContextProps {
  // state
  authStatus: AuthenticatedStatus;
  user: User | null;

  // methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

// High Order Component HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthenticatedStatus>('checking');
  const [user, setUser] = useState<User | null>(null);
  
  const handleLogin = (userId: number) => {
    const user = users.find(user => user.id === userId);

    if (!user) {
      console.log(`User not found ${userId}`);
      
      setUser(null);
      setAuthStatus('not-autheticated');

      return false;
    }

    setUser(user);
    setAuthStatus('authenticated');

    return true;
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');

    setUser(null);
    setAuthStatus('not-autheticated');
  };

  return (
    <UserContext value={{
      authStatus: authStatus,
      user: user,
      login: handleLogin,
      logout: handleLogout
    }}>
      { children }
    </UserContext>
  );
};
