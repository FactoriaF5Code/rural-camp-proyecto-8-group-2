import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../../useFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, url, setNeedsReload } = useFetch();
  const [libros, setLibros] = useState([]);


  const PostBook = async (newBook, url) => {
    try {
      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newBook)
      };
      const response = await fetch(url, options);

      if(response.ok) {
        setNeedsReload(true);
        alert("Realizado con exito");
      }else {
        alert("error al realizar la operación");
      }
    }catch (error) {
      console.error("Error de red", error);
    }
  };


  const DeleteBook = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNeedsReload(true);
      })
      .catch((error) => {
        console.error("error al borrar", error);
      });
  };

  useEffect(() => {
    if (data) {
      setLibros(data);
    }
  }, [data]);

  const value = {
    libros,
    DeleteBook,
    PostBook
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
