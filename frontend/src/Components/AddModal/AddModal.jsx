import "./AddModal.css";
import cruz from "../../assets/cruz.png"

export default function AddModal({ onClose }) {

  return (
    <section className="overlay">
      <section className="contenedorModal">
        <div className="contenedorModal__content">
          <div className="contenedorButton__cerrar">
            <button className="cerrarModal" onClick={onClose}>
              <img src={cruz} alt="x" />
            </button>
          </div>
          <div className="contenedorInformación"></div>
        </div>
      </section>
    </section>
  );
}
