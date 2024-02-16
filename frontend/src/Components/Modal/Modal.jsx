import cruz from "../../assets/cruz.png";
import "./Modal.css";

export default function Modal({ libro, onClose }) {
  return (
    <section className="overlay">
      <section className="contenedorModal">
        <div className="contenedorModal__content">
          <div className="contenedorButton__cerrar">
            <button className="cerrarModal" onClick={onClose}>
              <img src={cruz} alt="x" />
            </button>
          </div>
          <div className="contenedorInformación">
            <div className="h2Input">
              <h2 className="h2Info">TÍTULO</h2>
              <section className="inputInfo">{libro.title}</section>
            </div>
            <div className="h2Input">
              <h2 className="h2Info">AUTOR</h2>
              <section className="inputInfo">{libro.author}</section>
            </div>
            <div className="h2Input">
              <h2 className="h2Info">SINOPSIS</h2>
              <section className="inputInfo__sinopsis">
                {libro.synopsis}
              </section>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
