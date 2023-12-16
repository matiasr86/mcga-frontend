import React from "react";
import LogIn from "../components/LogInForm";


const Login = () => {
  return (
    <>
      <div className="row vw-100 bg-dark">
        <div className="container-fluid vh-100 col-12 col-md-4 col-lg-3 py-4 bg-dark d-flex justify-content-center">
          <LogIn />
        </div>
      </div>
    </>
  );
};

export default Login;
