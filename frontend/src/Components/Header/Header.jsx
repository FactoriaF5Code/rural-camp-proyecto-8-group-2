import "./Header.css"

export const Header = () => {
  return (
    <>
    <button className="logo">
        <img src="../../assets/logo.svg" alt="logo" />
    </button>
    <input className="buscador" type="text" placeholder="Buscar..." />
    <hr />
    </>
  )
}
