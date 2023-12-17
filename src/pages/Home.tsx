import BooksHome from "../components/BooksHome";
import LogIn from "../components/LogInForm";


const Home = () => {
  return (
    <>
      <div className="row  mx-auto vh-100">
        <div className="container col-12 col-md-4 col-lg-3 px-4 py-4 bg-dark ">
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
