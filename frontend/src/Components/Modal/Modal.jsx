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
            <h2 className="h2Info">TÍTULO</h2>
            <input className="inputInfo" type="text"  placeholder={libro.titulo} />
            <h2 className="h2Info">AUTOR</h2>
            <input className="inputInfo" type="text" placeholder={libro.autor} />
            <h2 className="h2Info">SINOPSIS</h2>
            <input className="inputInfo" type="text"  placeholder={libro.sinopsis}/>
          </div>
        </div>
      </section>
    </section>
  );
}
