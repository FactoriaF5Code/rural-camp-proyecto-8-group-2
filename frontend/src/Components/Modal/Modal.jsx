import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./Modal.css";

export default function Modal({ libro, onClose }) {
  return (
    <section className="contenedorModal">
      <div className="contenedorModal__content">
        <button className="cerrarModal" onClick={onClose}>
          Cerrar
        </button>
        <p>{libro.titulo}</p>
      </div>
    </section>
  );
}
