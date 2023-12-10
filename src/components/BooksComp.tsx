import {Books} from "../interfaces/interfaces";

const BooksComp = () => {
  const booksList: Books[] = [
    {
      id: "2lfj",
      title: "Libro 1",
      author: "Marinelli",
      activo: true,
    },
    {
      id: "kjlfj",
      title: "Libro 2",
      author: "Depetris",
      activo: true,
    },
    {
      id: "2lhfj",
      title: "Libro 3",
      author: "Kopech",
      activo: true,
    },
  ];

  return (
    <>
      <div id="div-tabla">
        <span>Cantidad de libros registrados: {booksList.length}</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {booksList.map((books) => (
              <tr key={books.id}>
                <td>{books.id}</td>
                <td>{books.title}</td>
                <td>{books.author}</td>
                <td className={books.activo ? "text-success" : "text-danger"}>
                  {books.activo ? "Activo" : "Inactivo"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksComp;