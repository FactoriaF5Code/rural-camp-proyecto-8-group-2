import "./Listado.css";
import { useDataContext } from "../DataContext/DataContext";
import Modal from '../Modal/Modal';

export default function Listado({ searchTerm }) {
  const { libros } = useDataContext();

  return (
    <>
      <div className="containerCategorias">
        <h3 className="containerCategorias__titulo">TÍTULO</h3>{" "}
        <h3 className="containerCategorias__autor">AUTOR</h3>
      </div>
      {libros.map((book) => {
        if (
          !searchTerm ||
          book.titulo.toLowerCase().includes(searchTerm) ||
          book.autor.toLowerCase().includes(searchTerm)
        ) {
          return (
            <>
              <hr className="listado__hr"/>
              <div className="containerCategorias__unicoLibro" key={book.id}>
                <p className="unicoLibro__titulo">{book.titulo}</p>
                <p className="unicoLibro__autor">{book.autor}</p>
                < Modal/>
              </div>
              
            </>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
