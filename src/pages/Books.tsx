import { Link } from "react-router-dom";
import BooksList from "../components/BooksList";

const Books = () => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center">Nuestros Libros</h3>
        <div>
          <Link to="/books/add" className="btn btn-primary">Nuevo Libro</Link>
          <BooksList />
        </div>
      </div>
    </>
  );
};

export default Books;
