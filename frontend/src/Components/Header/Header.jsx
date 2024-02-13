import "./Header.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const URL = "http://localhost:8080/libros";

  const showBooks = async () => {
    const response = await fetch(URL);
    const books = await response.json();
    console.log(books);
  };
  showBooks()
  
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
