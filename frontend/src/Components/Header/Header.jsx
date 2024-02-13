import "./Header.css";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <main className="container">
        <button className="logo">
          <img src={Logo} alt="logo" />
        </button>
        <input className="buscador" type="text" placeholder="Buscar..." />
      </main>
      <hr />
    </>
  );
};
