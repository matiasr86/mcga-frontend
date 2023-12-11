import BooksComp from "../components/BooksComp";
import LogIn from "../components/LogIn";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="row  mx-auto">
        <div className="container col-12 col-md-4 col-lg-3 px-4 vh-100  bg-dark ">
          <LogIn />
        </div>
        <div className="container col-12 col-md-8 col-lg-9  text-center ">
          <h3 className="text-center mt-2 mb-2">Listado público de Libros</h3>
          <BooksComp />
          <Link className="text-dark fs-3 mx-5" to={"/books/add"}>
            Nuevo libro
          </Link>
  
        </div>
      </div>
    </>
  );
};

export default Home;
