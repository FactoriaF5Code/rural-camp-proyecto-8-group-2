import { Header } from "../Header/Header";
import "./Home.css";
import { Panel } from "../Panel/Panel";
import Listado from "../Listado/Listado";
import { useState } from "react";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Panel  isSearching={searchTerm !== ""}/>
      {searchTerm && <Listado searchTerm={searchTerm} />}
    </>
  );
};
