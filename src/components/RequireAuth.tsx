import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default RequireAuth;






/* 
import { ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";


const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState<User | null>(null);
  // Estado para rastrear si se está cargando la información de autenticación
  const [loading, setLoading] = useState(true);

  // Efecto secundario para suscribirse a los cambios en la autenticación
  useEffect(() => {
    // Obtener la instancia de autenticación
    const auth = getAuth();
    
    // Función para manejar los cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Actualizar el estado del usuario
      setUser(user);
      // Indicar que la carga ha finalizado
      setLoading(false);
    });

    // Función de limpieza para cancelar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // Si aún se está cargando la información de autenticación, mostrar un mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si hay un usuario autenticado, renderizar los hijos
  if (user) {
    return <>{children}</>;
  } else {
    // Si no hay un usuario autenticado, redirigir a la página de inicio de sesión
    <link rel="stylesheet" href="" />
  }
};

export default RequireAuth;
 */