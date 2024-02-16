import "./ModalAlert.css"

export default function ModalAlert() {
  const mensajeAlerta = document.getElementById("mensajeAlerta");

  function mostrarAlerta() {
    mensajeAlerta.style.display = block;
  }
  return (
    <section id="mensajeAlerta">
      <p>Libro descatalogado con exito</p>
      <button>ok</button>
    </section>
  );
}
