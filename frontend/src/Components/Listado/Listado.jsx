import "./Listado.css";
import { useDataContext } from "../DataContext/DataContext";

export default function Listado({ searchTerm }) {
  const { libros } = useDataContext();

  return (
    <>
    <div className="containerCategorias">
      <h3>Título</h3> <h3>autor</h3>
      </div>
      {libros.map((book) => {
        if (
          !searchTerm ||
          book.titulo.toLowerCase().includes(searchTerm) ||
          book.autor.toLowerCase().includes(searchTerm)
        ) {
          return (
            <>
              <hr />
              <div className="containerCategorias__unicoLibro" key={book.id}>
                <p>{book.titulo}</p>
                <p>{book.autor}</p>
              </div>
              <hr />
            </>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
