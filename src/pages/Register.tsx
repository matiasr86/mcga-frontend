import RegisterComp from "../components/RegisterComp";
import { useAuth } from "../context/AuthProvider";
import LogOut from "../components/LogOut";

const Register: React.FC = () => {
  const { isLoggedIn} = useAuth();

  

  return (
    <>
        <div className="row vw-100 bg-dark">
        <div className="container-fluid vh-100 col-12 col-md-4 col-lg-3 py-4 bg-dark d-flex justify-content-center">
          {isLoggedIn ? (<LogOut/>) : <RegisterComp/>}
        </div>

        </div>
    </>
  );
};

export default Register;