import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


const Login = () => {
  const {user, setUser} = useContext(UserContext);
  const changeState = ()=>{
    setUser(!setUser);
  }
  return ( 
    <>
      <h2>Login</h2>
      <h2>{user ? "En linea" : "Offline"}</h2>
      <button onClick={changeState}>Acceder</button>
    </>
   );
}
 
export default Login;