import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthProvider";


const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();
  const tokenSaved = localStorage.getItem('Token');
  if (!isLoggedIn || !tokenSaved)  {
    setIsLoggedIn(false)
    signOut(auth);
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    return <Navigate to={"/login"} />;  
  }
  else {
    const authorization = getAuth();
    authorization.currentUser?.getIdToken().then((res : any)=>{
      if(res !== localStorage.getItem('Token')){
        setIsLoggedIn(false)
        signOut(auth);
        localStorage.removeItem("Token");
        localStorage.removeItem("User");
        return <Navigate to={"/login"} />;  
    }})
}
  return children;
};

export default RequireAuth;