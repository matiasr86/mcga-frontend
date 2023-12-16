import { Book } from "../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/libro");
        const booksData: Book[] = response.data;
        setBooks(booksData);
      } catch (error) {
        console.error("Error en la carga de libros:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (Id: string) => {
    try {
      const confirmacionEliminar = await deleteAlert();

      if (confirmacionEliminar) {
        await axios.delete(`http://localhost:3000/libro/${Id}`);
        // Actualizar el estado después de la eliminación
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== Id));
      }
    } catch (error) {
      console.error("Error al intentar borrar el libro:", error);
      errorAlert();
    }
  };

  const handleEdit = async (Id: string) => {
    try {
      navigate(`/books/edit/${Id}`);
    } catch (error) {
      console.error("Error al intentar editar el libro:", error);
    }
  };

  const formatDate = (dateString: Date) => {
    // Asume que dateString es un formato válido para el constructor de Date
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };

  const deleteAlert = async (): Promise<boolean> => {
    try {
      const respuesta = await swal({
        title: "Eliminar",
        text: "¿Desea realmente eliminar el registro?",
        icon: "warning",
        buttons: ["No Eliminar", "Eliminar"],
      });

      if (respuesta) {
        successAlert();
        return true; // Confirmación para eliminar
      } else {
        return false; // Cancelar la eliminación
      }
    } catch (error) {
      console.error("Error en la alerta de eliminación:", error);
      errorAlert();
      return false; // Cancelar la eliminación en caso de error
    }
  };

  const successAlert = () => {
    swal({
      title: "Eliminar",
      text: "Libro eliminado con exito",
      icon: "success",
      timer: 2000,
    });
  };

  const errorAlert = () => {
    swal({
      title: "Eliminar",
      text: "El libro no pudo ser eliminado",
      icon: "error",
      timer: 2000,
    });
  };

  return (
    <>
      <div>
        <div className="text-end px-3">
          <span>
            Cantidad de libros registrados:{" "}
            {books.length === 0 ? "0" : books.length}
          </span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Isbn</th>
              <th scope="col">Género</th>
              <th scope="col">Publicación</th>
              <th scope="col">Editorial</th>
              <th scope="col">Nro Páginas</th>
              <th scope="col" className="text-center">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
              <tr key={book._id}>
                <td>{book.titulo}</td>
                <td>{book.autor}</td>
                <td>{book.isbn}</td>
                <td>{book.genero}</td>
                <td>{formatDate(book.fechaPublicacion)}</td>
                <td>{book.editorial}</td>
                <td className="text-center">{book.numPaginas}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleEdit(book._id)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-danger mx-1"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksList;
