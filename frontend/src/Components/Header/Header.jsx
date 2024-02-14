import "./Header.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

export const Header = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    onSearch(searchTerm);
  };
  
  return (
    <>
      <main className="container">
        <button className="logo">
          <img src={Logo} alt="logo" />
        </button>
        <input className="buscador" type="text" value={search}  onChange={handleSearchInput} placeholder="Buscar..." />
      </main>
      <hr className="hr" />
    </>
  );
};
