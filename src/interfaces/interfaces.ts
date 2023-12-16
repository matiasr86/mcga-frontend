export interface UserState{

  state: boolean;
}

export interface BookToAdd {
  titulo: string;
  autor: string;
  isbn: string;
  genero: string;
  fechaPublicacion: Date;
  editorial: string;
  numPaginas: number;
}

export interface Book {
  _id: string
  titulo: string;
  autor: string;
  isbn: string;
  genero: string;
  fechaPublicacion: Date;
  editorial: string;
  numPaginas: number;
}

