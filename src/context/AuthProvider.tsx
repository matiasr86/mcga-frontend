import React, { createContext, useContext, useState, ReactNode } from "react";

// Definimos el tipo para el contexto
interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Creamos el contexto con un valor inicial
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Creamos un componente de proveedor que utilizará el estado y las funciones relacionadas con la autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Lógica de inicio de sesión, por ejemplo, cambiar el estado a true
    setLoggedIn(true);
  };

  const logout = () => {
    // Lógica de cierre de sesión, por ejemplo, cambiar el estado a false
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Un gancho personalizado para acceder al contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
