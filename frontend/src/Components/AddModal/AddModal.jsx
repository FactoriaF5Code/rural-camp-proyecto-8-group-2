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
    PostBook(newBook, "http://localhost:8080/books")
      .then(() => {
        setNewBook({ title: "", author: "", synopsis: "" });
        onClose();
      })
      .catch((error) => {
        console.error("Error al guardar el libro:", error);
      });
  }

  return (
    <main className="overlay">
      <div className="contenedorAñadirLibro">
          <button className="cerrarModal" onClick={onClose}>
            <img src={cruz} alt="x" />
          </button>
        <div>
          <section className="newInfoLibro">
            <h2>TÍTULO</h2>
            <input
              type="text"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              placeholder="Introduce el título..."
            />
          </section>
          <section className="newInfoLibro">
            <h2>AUTOR</h2>
            <input
              type="text"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              placeholder="Introduce el autor..."
            />
          </section>
          <section className="newInfoLibro">
            <h2>SINOPSIS</h2>
            <input
              id="newSynopsis"
              type="text"
              value={newBook.synopsis}
              onChange={(e) =>
                setNewBook({ ...newBook, synopsis: e.target.value })
              }
              placeholder="Introduce la Sinopsis del libro..."
            />
          </section>
        </div>
        <button className="guardarNewLibro" onClick={crearLibroYCerrar}>
          <img src={guardar} alt="guardar" />
          Guardar
        </button>
      </div>
    </main>
  );
}
