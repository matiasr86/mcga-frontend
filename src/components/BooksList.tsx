import { Book } from "../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mcga-tn-2023-n1-server.onrender.com/libro"
        );
        const booksData: Book[] = response.data;
        setBooks(booksData);
        setIsLoading(false);
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
        await axios.delete(
          `https://mcga-tn-2023-n1-server.onrender.com/libro/${Id}`
        );
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
        <div className="container col-12 col-md-12 col-lg-12 py-4 overflow-auto vh-70">
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
              {isLoading? <h3>Cargando...</h3> : (books.length === 0)? 'No hay libros registrados' : ''}
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
                      <a onClick={() => handleEdit(book._id)}>
                        <i id="edit" className="fa-regular fa-pen-to-square"></i>
                      </a>
                      <a onClick={() => handleDelete(book._id)}>
                      <i id="delete" className="fa-solid fa-trash" ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default BooksList;
