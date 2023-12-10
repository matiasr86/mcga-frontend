import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../src/firebase";
import { useAuth } from "../context/AuthProvider";
import LogOut from "./LogOut";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredencial = await createUserWithEmailAndPassword(
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
  return (
    <>
      {isLoggedIn ? (
        <LogOut />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h2 className="text-white text center mb-2">Registro</h2>
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
            Registrar
          </button>
        </form>
      )}
    </>
  );
};

export default Register;
