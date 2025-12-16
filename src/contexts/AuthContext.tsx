import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const mockUsers = [
  { id: '1', username: 'doctor1', password: 'password', name: 'Dr. John Smith', role: 'doctor', specialization: 'Cardiologist', email: 'john@hospital.com' },
  { id: '2', username: 'doctor2', password: 'password', name: 'Dr. Sarah Johnson', role: 'doctor', specialization: 'Neurologist', email: 'sarah@hospital.com' },
  { id: '3', username: 'patient1', password: 'password', name: 'Mike Wilson', role: 'patient', email: 'mike@email.com' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(mockUsers);

  useEffect(() => {
    const savedUser = localStorage.getItem('hospitalUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('hospitalUser', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const register = (userData) => {
    const exists = users.find(u => u.username === userData.username);
    if (exists) {
      return { success: false, message: 'Username already exists' };
    }
    const newUser = { ...userData, id: Date.now().toString() };
    setUsers([...users, newUser]);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('hospitalUser', JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hospitalUser');
  };

  const getDoctors = () => users.filter(u => u.role === 'doctor');
  const getPatients = () => users.filter(u => u.role === 'patient');

  return (
    <AuthContext.Provider value={{ user, users, login, register, logout, getDoctors, getPatients }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
