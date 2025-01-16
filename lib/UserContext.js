import { createContext, useState, useContext, useEffect } from 'react';
import { mockUser } from './mockData';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initUser() {
      try {
        // For demo, we simulate a delay and use mock user
        await new Promise(resolve => setTimeout(resolve, 500));
        setUser(mockUser);
      } catch (err) {
        setError('Failed to load user');
        console.error('User init error:', err);
      } finally {
        setLoading(false);
      }
    }

    initUser();
  }, []);

  const login = async (userData) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(userData);
      setError(null);
    } catch (err) {
      setError('Failed to log in');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
      setError(null);
    } catch (err) {
      setError('Failed to log out');
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext; 