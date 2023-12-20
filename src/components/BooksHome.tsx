import { Book } from "../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";

const BooksHome = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mcga-tn-2023-n1-server.onrender.com/libro");
        const booksData: Book[] = response.data;
        setBooks(booksData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid py2 vh-70">
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
              <th scope="col">Género</th>
              <th scope="col">Nro Páginas</th>
            </tr>
          </thead>
          {isLoading? <h3>Cargando...</h3> : ''}
          <tbody>
            {books.map((books: Book) => (
              <tr key={books._id}>
                <td>{books.titulo}</td>
                <td>{books.autor}</td>
                <td>{books.genero}</td>
                <td className="text-center">{books.numPaginas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksHome;
