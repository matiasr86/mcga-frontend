import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { BooksToAdd } from "../interfaces/interfaces";
import { dateValid } from "../components/Validators";

const AddBook: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      const newBook: BooksToAdd = {
        titulo: data.titulo,
        autor: data.autor,
        isbn: data.isbn,
        genero: data.genero,
        fechaPublicacion: data.publicacion,
        editorial: data.editorial,
        numPaginas: data.nropaginas,
      };
      console.log(newBook);
    } catch (error) {
      console.error(error);
    }
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
              {...register("titulo", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
              {...(errors.titulo?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.titulo?.type === "maxLength" && (
                <p className="text-danger">Máximo 40 caracteres</p>
              ))}
              {...(errors.titulo?.type === "minLength" && (
                <p className="text-danger">Mínimo 3 caracteres</p>
              ))}
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
              {...register("autor", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
              {...(errors.autor?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.autor?.type === "maxLength" && (
                <p className="text-danger">Máximo 40 caracteres</p>
              ))}
              {...(errors.autor?.type === "minLength" && (
                <p className="text-danger">Mínimo 3 caracteres</p>
              ))}
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
              {...register("isbn", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
              {...(errors.isbn?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.isbn?.type === "maxLength" && (
                <p className="text-danger">Máximo 40 caracteres</p>
              ))}
              {...(errors.isbn?.type === "minLength" && (
                <p className="text-danger">Mínimo 3 caracteres</p>
              ))}
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
              {...register("genero", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
              {...(errors.genero?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.genero?.type === "maxLength" && (
                <p className="text-danger">Máximo 40 caracteres</p>
              ))}
              {...(errors.genero?.type === "minLength" && (
                <p className="text-danger">Mínimo 3 caracteres</p>
              ))}
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
              {...register("fechaPublicacion", {
                required: true,
                validate: dateValid,
              })}
              {...(errors.fechaPublicacion?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.fechaPublicacion?.type === "validate" && (
                <p className="text-danger">La fecha debe ser anterior a la actual</p>
              ))}
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
              {...register("editorial", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
              {...(errors.editorial?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
              {...(errors.editorial?.type === "maxLength" && (
                <p className="text-danger">Máximo 40 caracteres</p>
              ))}
              {...(errors.editorial?.type === "minLength" && (
                <p className="text-danger">Mínimo 3 caracteres</p>
              ))}
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
              {...register("numPaginas", {
                required: true,
              })}
              {...(errors.numPaginas?.type === "required" && (
                <p className="text-danger">El campo es requerido</p>
              ))}
            />
          </div>
        </div>
        <button type="submit">Registrar Libro</button>
      </form>
    </>
  );
};

export default AddBook;
