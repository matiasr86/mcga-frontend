import { SubmitHandler, useForm } from "react-hook-form";
import { BookToAdd } from "../interfaces/interfaces";
import { dateValid } from "./Validators";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import swal from "sweetalert";

const BookEdit = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookToAdd>();

  useEffect(() => {
    const getBook = async () => {
      try {
        // Realizar una solicitud a la API para obtener los datos del libro por id
        const response = await axios.get(`https://mcga-tn-2023-n1-server.onrender.com/libro/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del libro", error);
      }
    };
    getBook();
  }, [id]);

  // Obtener datos del libro al cargar el componente
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookToAdd>();

  useEffect(() => {
    if (book) {
      Object.keys(book).forEach((key) => {
        // Formatear la fecha antes de establecerla en el formulario
        if (key === "fechaPublicacion") {
          setValue(
            key as keyof BookToAdd,
            format(new Date(book[key as keyof BookToAdd]), "yyyy-MM-dd")
          );
        } else {
          setValue(key as keyof BookToAdd, book[key as keyof BookToAdd]);
        }
      });
    }
  }, [book, setValue]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookToAdd> = async (data) => {
    try {
      const response = await axios.put(
        `https://mcga-tn-2023-n1-server.onrender.com/libro/${id}`,
        data
      );
      // Manejar la respuesta del servidor según sea necesario
      console.log("Libro editado con éxito:", response.data);
      successAlert();
      // Redirigir al usuario a la página del listado de libros
      navigate("/books");
    } catch (error) {
      // Manejar errores de la solicitud
      console.error("Error al guardar los cambios del libro:", error);
      errorAlert();
    }
  };

  const successAlert = () => {
    swal({
      title: "Edición",
      text: "Libro editado con exito",
      icon: "success",
      timer: 2000,
    });
  };

  const errorAlert = () => {
    swal({
      title: "Edición",
      text: "El libro no pudo ser editado",
      icon: "error",
      timer: 2000,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="fw-bold">
            <label htmlFor="titulo" className="form-label">
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
            />
            {errors.titulo?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.titulo?.type === "maxLength" && (
              <p className="text-danger">Máximo 40 caracteres</p>
            )}
            {errors.titulo?.type === "minLength" && (
              <p className="text-danger">Mínimo 3 caracteres</p>
            )}
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="autor" className="form-label">
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
            />
            {errors.autor?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.autor?.type === "maxLength" && (
              <p className="text-danger">Máximo 40 caracteres</p>
            )}
            {errors.autor?.type === "minLength" && (
              <p className="text-danger">Mínimo 3 caracteres</p>
            )}
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="isbn" className="form-label">
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
            />
            {errors.isbn?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.isbn?.type === "maxLength" && (
              <p className="text-danger">Máximo 40 caracteres</p>
            )}
            {errors.isbn?.type === "minLength" && (
              <p className="text-danger">Mínimo 3 caracteres</p>
            )}
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="genero" className="form-label">
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
            />
            {errors.genero?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.genero?.type === "maxLength" && (
              <p className="text-danger">Máximo 40 caracteres</p>
            )}
            {errors.genero?.type === "minLength" && (
              <p className="text-danger">Mínimo 3 caracteres</p>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="fw-bold">
            <label htmlFor="fechaPublicacion" className="form-label">
              Fecha de Publicación
            </label>
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control double-size"
              {...register("fechaPublicacion", {
                required: true,
                validate: dateValid,
              })}
            />
            {errors.fechaPublicacion?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.fechaPublicacion?.type === "validate" && (
              <p className="text-danger">
                La fecha debe ser anterior a la actual
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="fw-bold">
            <label htmlFor="editorial" className="form-label">
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
            />
            {errors.editorial?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
            {errors.editorial?.type === "maxLength" && (
              <p className="text-danger">Máximo 40 caracteres</p>
            )}
            {errors.editorial?.type === "minLength" && (
              <p className="text-danger">Mínimo 3 caracteres</p>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="fw-bold">
            <label htmlFor="numPaginas" className="form-label">
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
            />
            {errors.numPaginas?.type === "required" && (
              <p className="text-danger">El campo es requerido</p>
            )}
          </div>
        </div>
        <button className="btn btn-success my-1" type="submit">
          Guardar cambios
        </button>
      </form>
    </>
  );
};

export default BookEdit;
