import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const LogOut = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    navigate("/");
  };
  return (
    <>
      <div className="container-fluid py-4 d-flex justify-content-center">
        {isLoggedIn ? (
          <>
            <div className="text-center px-2">
              <h2 className="text-white pb-2">Bienvenido,</h2>
              <h4 className="text-white">{user?.email}</h4>

              <button className="btn btn-primary" onClick={handleLogOut}>
                Cerrar Sesión
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LogOut;
