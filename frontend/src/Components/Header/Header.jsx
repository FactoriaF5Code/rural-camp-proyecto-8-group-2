import "./Header.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="container">
        <button className="logo">
          <img src={Logo} alt="logo" />
        </button>
        <input className="buscador" type="text" placeholder="Buscar..." />
      </main>
      <hr className="hr" />
    </>
  );
};
