import { createContext, useState } from "react";

export const UserContext = createContext();


interface props{
  children: JSX.Element | JSX.Element[]
}
//Utilizamos el contexto para generar nuestras rutas privadas
//Todo componente dentro de UserProvider tendra acceso a User y setUser 

const UserProvider = ({children}:props) => {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
