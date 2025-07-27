import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  users: any[];
  addUser: (user: any) => void;
  pixKey: string;
  updatePixKey: (key: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Credenciais do admin (em produção, estas estariam em variáveis de ambiente)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'chivas2024';

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [pixKey, setPixKey] = useState('');

  useEffect(() => {
    // Verificar se já está logado
    const authStatus = localStorage.getItem('admin_authenticated');
    setIsAuthenticated(authStatus === 'true');

    // Carregar dados do localStorage
    const savedUsers = localStorage.getItem('users_data');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const savedPixKey = localStorage.getItem('pix_key');
    if (savedPixKey) {
      setPixKey(savedPixKey);
    } else {
      setPixKey('contato@medicoagora.com'); // Chave padrão
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  const addUser = (user: any) => {
    const newUser = {
      ...user,
      id: Date.now(),
      cadastro: new Date().toLocaleDateString('pt-BR'),
      status: 'Aguardando Pagamento'
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users_data', JSON.stringify(updatedUsers));
  };

  const updatePixKey = (key: string) => {
    setPixKey(key);
    localStorage.setItem('pix_key', key);
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      users,
      addUser,
      pixKey,
      updatePixKey
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};