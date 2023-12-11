export interface UserState{

  state: boolean;
}

export interface Books {
  _id: string;
  titulo :string;
  autor :string;
  isbn:string;
  genero: string;
  publicacion: Date;
  editorial: string;
  nroPaginas: number

}