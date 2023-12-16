import { Link } from "react-router-dom";
import BookEdit from "../components/BookEdit";

const EditBook = () => {
  return (
    <>
      <div className="bg-dark text-light">
        <h3 className="text-center">Formulario de edición - Editar Libro</h3>
        <div className="container col-12 col-md-6 col-lg-6 py-4">
          <BookEdit />
          <Link to="/books" className="btn btn-primary my-3">
            Volver
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditBook;
