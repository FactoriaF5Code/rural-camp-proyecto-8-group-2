import cruz from "../../assets/cruz.png";
import papelera from "../../assets/papelera.png";
import "./Modal.css";
import { useDataContext } from "../DataContext/DataContext";


export default function Modal({ libro, onClose }) {
const {DeleteBook} = useDataContext();
const mensajeAlerta = document.getElementById ("mensajeAlerta");

  const acortarSinopsis = (sinopsis) => {
    if (sinopsis && sinopsis.length > 250) {
      return sinopsis.substring(0, 250) + "...";
    } else {
      return sinopsis;
    }
  };

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
                {acortarSinopsis(libro.synopsis)}
              </section>
              <article className="contenedorBotonDescatalogar">
                <button className="descatalogar" onClick={DeleteBook(libro.id)}>
                  DESCATALOGAR
                  <img className="papelera" src={papelera} alt="delete" />
                </button>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="mensajeAlerta">
        <p>Libro descatalogado con exito</p>
        <button>ok</button>
      </section>
    </section>
  );
}
