
import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// Definimos el tipo para el contexto
interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | undefined;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

// Creamos el contexto con un valor inicial
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Creamos un componente de proveedor que utilizará el estado y las funciones relacionadas con la autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | undefined>();

  // Estado para rastrear si se está cargando la información de autenticación
  const [loading, setLoading] = useState(true);

  // Efecto secundario para suscribirse a los cambios en la autenticación
  useEffect(() => {
    // Obtener la instancia de autenticación
    const auth = getAuth();

    // Función para manejar los cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Actualizar el estado del usuario
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
      }
      // Indicar que la carga ha finalizado
      setLoading(false);
    });

    // Función de limpieza para cancelar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // Función para cambiar el estado isLoggedIn
  const setIsLoggedIn: Dispatch<SetStateAction<boolean>> = (value) => {
    setLoggedIn(value);
  };

  // Si aún se está cargando la información de autenticación, mostrar un mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn }}>
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
