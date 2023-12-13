import { Books } from "../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

const BooksList = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/libro");
        const booksData: Books[] = response.data;
        setBooks(booksData);
      } catch (error) {
        console.error("Error en la carga de libros:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (Id: string) => {
    try {
      await axios.delete(`http://localhost:3000/libro/${Id}`);
      // Actualizar el estado después de la eliminación
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== Id));
    } catch (error) {
      console.error('Error al intentar borrar el libro:', error);
    }
  };







  const formatDate = (dateString: Date) => {
    // Asume que dateString es un formato válido para el constructor de Date
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };

  /*   const createBook = async (bookData: BookData) => {
    const response = await axios.post("https://example.com/posts", bookData);
    return response.data;
  };

  const updateBook = async (id: string, bookData: BookData) => {
    const response = await axios.put(`https://example.com/posts/${id}`, bookData);
    return response.data;
  };

  */

  return (
    <>
      <div className="container-fluid py2">
        <h2>Nuestros Libros</h2>
        <div>
          <button type="submit" className="btn btn-primary">
            Nuevo Libro
          </button>
        </div>
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
            {books.map((books: Books) => (
              <tr key={books.id}>
                <td>{books.titulo}</td>
                <td>{books.autor}</td>
                <td>{books.isbn}</td>
                <td>{books.genero}</td>
                <td>{formatDate(books.fechaPublicacion)}</td>
                <td>{books.editorial}</td>
                <td className="text-center">{books.numPaginas}</td>
                <td className="text-center">
                  <button className="btn btn-warning">Editar</button>
                  <button onClick={() => handleDelete(books.id)} className="btn btn-danger mx-1">Eliminar</button>
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
