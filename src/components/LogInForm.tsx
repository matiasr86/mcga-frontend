import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
import { useAuth } from "../context/AuthProvider";
import swal from "sweetalert";

const LogInForm = () => {
  const { isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const email = data.email;
    const password = data.password;
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
      navigate("/");
    } catch (error) {
      errorAlert(error)
      console.log(error);
    }
  };

  const errorAlert = (err : unknown) => {
    swal({
      title: "Log In",
      text: `Error al intentar iniciar sesión, ${err}`,
      icon: "error",
      timer: 8000,
    });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <h2 className="text-white text center mb-2">Log in</h2>
              <input
                type="email"
                className="form-control"
                placeholder="Example@exammple.com"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-danger">Formato incorrecto</p>
              )}
              <div className="form-text text-white">
                Nunca compartiremos tu e-mail con alguien mas.
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  maxLength: 15,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-danger">Máximo 15 caracteres</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-danger">Mínimo 6 caracteres</p>
              )}
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

export default LogInForm;
