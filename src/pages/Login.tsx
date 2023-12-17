import LogIn from "../components/LogInForm";



const Login = () => {
  return (
    <>
      <div className="h-100 bg-dark vh-100">
        <div className="container-fluid col-12 col-md-4 col-lg-3 py-4 bg-dark d-flex justify-content-center">
          <LogIn />
        </div>
      </div>
    </>
  );
};

export default Login;
