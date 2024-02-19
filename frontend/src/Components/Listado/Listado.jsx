/* eslint-disable react/prop-types */
import "./Listado.css";
import { useDataContext } from "../DataContext/DataContext";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Listado({ searchTerm }) {
  const { libros } = useDataContext();
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <main className="listadoLibros">
      <div className="containerCategorias">
        <h3> TÍTULO </h3>
        <h3> AUTOR </h3>
        <h3> DISPONIBILIDAD </h3>
      </div>
      {libros.map((book) => {
        if (
          !searchTerm ||
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
        ) {
          return (
            <>
              <hr className="listado__hr" />
              <div
                className="containerCategorias__unicoLibro"
                key={book.id}
                onClick={() => openModal(book)}
              >
                <p className="unicoLibro__titulo">{book.title}</p>
                <p className="unicoLibro__autor">{book.author}</p>
                {book.available ? (
                  <div className="circuloVerde"></div>
                ) : (
                  <div className="circuloRojo"></div>
                )}
              </div>
            </>
          );
        } else {
          return null;
        }
      })}
      {selectedBook && (
        <div className="contenedorModal__componente">
          <Modal libro={selectedBook} onClose={closeModal} />
        </div>
      )}
    </main>
  );
}
