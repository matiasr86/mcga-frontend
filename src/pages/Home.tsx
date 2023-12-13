import BooksHome from "../components/BooksHome";
import LogIn from "../components/LogIn";

const Home = () => {
  return (
    <>
      <div className="row  mx-auto">
        <div className="container col-12 col-md-4 col-lg-3 px-4 vh-100  bg-dark ">
          <LogIn />
        </div>
        <div className="container col-12 col-md-8 col-lg-9">
          <h3 className="text-center mt-2 mb-2">Listado público de Libros</h3>
          <BooksHome />
        </div>
      </div>
    </>
  );
};

export default Home;
