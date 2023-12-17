import BooksHome from "../components/BooksHome";
import LogIn from "../components/LogInForm";


const Home = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 bg-dark">
            <LogIn />
          </div>
          <div className="col-12 col-md-8 col-lg-9 bg-white overflow-auto">
            <h3 className="text-center mt-2 mb-2">Listado público de Libros</h3>
            <BooksHome />
          </div>
        </div>
      </div>
  );
};

export default Home;
