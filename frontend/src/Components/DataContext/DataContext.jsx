import { createContext, useContext} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  let libros = [
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "sinopsis": "1984 es una novela de ficción distópica escrita por George Orwell. Describe una sociedad totalitaria y vigilada donde el gobierno, liderado por el Gran Hermano, ejerce un control absoluto sobre la vida de los ciudadanos, incluso sobre sus pensamientos."
    },
    {
        "titulo": "Cien años de soledad",
        "autor": "Gabriel García Márquez",
        "sinopsis": "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez. Narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo. La obra es una exploración de la soledad, el amor, la muerte y la complejidad de la experiencia humana."
    },
    {
        "titulo": "El señor de los anillos",
        "autor": "J.R.R. Tolkien",
        "sinopsis": "El señor de los anillos es una trilogía de novelas épicas escrita por el autor británico J.R.R. Tolkien. La historia sigue las aventuras de un hobbit llamado Frodo Bolsón, quien se embarca en una misión para destruir un poderoso anillo mágico que podría sumir al mundo en la oscuridad."
    },
    {
        "titulo": "Harry Potter y la piedra filosofal",
        "autor": "J.K. Rowling",
        "sinopsis": "Harry Potter y la piedra filosofal es el primer libro de la serie de Harry Potter escrita por J.K. Rowling. Narra la historia de un niño huérfano que descubre que es un mago y es admitido en la escuela de magia y hechicería de Hogwarts. Allí, junto con sus amigos Ron y Hermione, Harry se enfrenta a numerosos desafíos, incluido el intento de evitar que un malvado mago llamado Voldemort recupere su poder."
    }
]


  const value = {
    libros
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
