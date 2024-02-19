import "./AddModal.css";
import cruz from "../../assets/cruz.png";
import guardar from "../../assets/guardar.png";
import { useDataContext } from "../DataContext/DataContext";
import { useState } from "react";

// NewBookForm
export default function AddModal({ onClose }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    synopsis: "",
  });
  const { PostBook } = useDataContext();

  function crearLibroYCerrar() {
    onClose();
    PostBook(newBook, "http://localhost:8080/books");
    setNewBook({ title: "", author: "", synopsis: "" });
  }

  return (
    <>
      <section className="overlay">
        <section className="contenedorModal">
          <div className="contenedorModal__content">
            <div className="contenedorButton__cerrar">
              <button className="cerrarModal" onClick={onClose}>
                <img src={cruz} alt="x" />
              </button>
            </div>
            <h2>Título</h2>
            <input
              type="text"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              placeholder="Introduce el título..."
            />
            <h2>Autor</h2>
            <input
              type="text"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              placeholder="Introduce el autor..."
            />
            <h2>Sinopsis</h2>
            <input
              type="text"
              value={newBook.synopsis}
              onChange={(e) =>
                setNewBook({ ...newBook, synopsis: e.target.value })
              }
              placeholder="Introduce la Sinopsis del libro..."
            />
            <button onClick={crearLibroYCerrar}>
              <img src={guardar} alt="guardar" />
              Guardar
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
