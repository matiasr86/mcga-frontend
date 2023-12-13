export interface UserState{

  state: boolean;
}

export interface BooksToAdd {
  titulo: string;
  autor: string;
  isbn: string;
  genero: string;
  fechaPublicacion: Date;
  editorial: string;
  numPaginas: number;
}

export interface Books {
  id: string
  titulo: string;
  autor: string;
  isbn: string;
  genero: string;
  fechaPublicacion: Date;
  editorial: string;
  numPaginas: number;
}

