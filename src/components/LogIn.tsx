import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {useState} from 'react';
import LogOut from "./LogOut";


const LogIn = () => {
  const { isLoggedIn, login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredencial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredencial.user;
      const accessToken = await user.getIdToken(true);
      localStorage.setItem("Token", accessToken);
      localStorage.setItem("User", JSON.stringify(user));
      login();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const redireccionar = () => {
    navigate("/register");
  };
  return (
    <>
      {isLoggedIn ? (
        <LogOut />
      ) : (
        <div>
          <form onSubmit={handleLogin}>
          <div className="mb-3">
            <h2 className="text-white text center mb-2">Log in</h2>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Example@exammple.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text text-white">
              Nunca compartiremos tu e-mail con alguien mas.
            </div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
          <div className="form-text text-white mt-3">
            Eres nuevo usuario, entonces regístrate.
            <button
              className="btn btn-primary my-1 w-100 "
              onClick={redireccionar}
            >
              Registrese
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
