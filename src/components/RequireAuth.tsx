import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthProvider";


const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();

  if (!isLoggedIn || !localStorage.getItem('Token'))  {
    setIsLoggedIn(false)
    signOut(auth);
    localStorage.removeItem("Token");
    localStorage.removeItem("User");


    return <Navigate to={"/login"} />;
    
  }

  return children;
};

export default RequireAuth;