import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();

  if (!isLoggedIn || !localStorage.getItem('Token'))  {
    setIsLoggedIn(false)

    return <Navigate to={"/login"} />;
    
  }

  return children;
};

export default RequireAuth;