import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import  {Books} from "../interfaces/interfaces";


const AddBook: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newBook :Books = {
      _id: "hh",
      titulo: data.titulo,
      autor: data.autor,
      isbn: data.isbn,
      genero: data.genero,
      publicacion: data.publicacion,
      editorial: data.editorial,
      nroPaginas: data.nropaginas
    }
    console.log(newBook);
    };
  

  return (
    <>
      <h2>Formulario de registro </h2>
      <form className="container col-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Título
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"

              {...register("titulo", { required: "El título es obligatorio" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Autor
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el título"
              {...register("autor", { required: "El author es obligatorio" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Isbn
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"

              {...register("isbn", { required: "El isbn es obligatorio" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Género
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"

              {...register("genero", { required: "El género es obligatorio" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Publicación
            </label>
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control"

              {...register("publicacion", { required: "La fecha de publicación es obligatoria" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Editorial
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"

              {...register("editorial", { required: "El editorial es obligatorio" })}
            />
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nro páginas
            </label>
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"

              {...register("nropaginas", { required: "El editorial es obligatorio" })}
            />
          </div>
        </div>
        <button type="submit">Registrar Libro</button>
      </form>
    </>
  );
};

export default AddBook;
