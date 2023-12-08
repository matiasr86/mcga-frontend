import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login: React.FC = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Se presiono el boton");
    // Aquí puedes agregar lógica de autenticación, por ejemplo, una llamada a un servidor.
    // Si la autenticación es exitosa, llamas a la función de inicio de sesión.
    if(isLoggedIn){
      logout()
    }else{
      login();
    }
    navigate("/");
  };

  return (
    <div>
      <h2>Pantalla de Inicio de Sesión</h2>
      <button onClick={handleLogin}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default Login;
